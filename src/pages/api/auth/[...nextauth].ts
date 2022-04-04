import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const secret = process.env.SECRET || 'VERYSECRETROKKETWOW'

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async credentials => {
        let user = null

        if (credentials?.password && credentials?.username)
          user = { id: 10, email: credentials.username }

        return user
      },
    }),
  ],
  secret,
  jwt: {
    secret,
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      // JWT payload before sign, user data is the one given on authorize callback.
      if (user) token.email = user.email
      token.internalKey = 'internal'
      token.extraData = 'test'

      return token
    },
    session: async ({ session, token }) => {
      // Session data sent to client. token data is the JWT payload.
      session.clientKey = 'client'
      session.extraData = token.extraData

      return session
    },
  },
}

export default NextAuth(options)
