import jwt from 'jsonwebtoken'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT, JWTDecodeParams, JWTEncodeParams } from 'next-auth/jwt'
import Providers from 'next-auth/providers'

const secret = process.env.SECRET || 'VERYSECRETROKKETWOW'

const options: NextAuthOptions = {
  providers: [
    Providers.Credentials({
      name: 'User and Password',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials.username && credentials.password)
          return {
            username: credentials.username,
            token: 'test12341234',
          }

        return null
      },
    }),
  ],
  secret,
  session: {
    jwt: true,
  },
  jwt: {
    encode: async props => {
      const { token, secret } = props as JWTEncodeParams
      const jwtClaims = {
        name: token?.name as string,
        token: token?.token as string,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      }

      return jwt.sign(jwtClaims, secret, { algorithm: 'HS256' })
    },
    decode: async props => {
      const { token = '', secret } = props as JWTDecodeParams

      return jwt.verify(token, secret, {
        algorithms: ['HS256'],
      }) as JWT
    },
  },
  callbacks: {
    session: async (session, token) => {
      const encodedToken = jwt.sign(token, secret, { algorithm: 'HS256' })

      session.user = token
      session.accessToken = encodedToken

      return Promise.resolve(session)
    },
    jwt: async (token, user) => {
      if (user)
        (token.name = user.username as string), (token.token = user.token)

      return Promise.resolve(token)
    },
    signIn: async user => {
      if (user) return true

      return false
    },
    async redirect(url, baseUrl) {
      if (url.startsWith('/')) return baseUrl + url

      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  // Add custom pages for login if you need them
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: null, // If set, new users will be directed here on first sign in
  // },
}

export default NextAuth(options)
