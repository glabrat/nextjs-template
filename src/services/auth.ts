const URL = 'https://eiffel-back.aws-test.paris.cl/auth/login'

export interface LoginBody {
  email: string
  password: string
}
/*
interface Permission {
  c: string
  a: string
}

interface JwtPayload {
  api_key: string // verify
  email: string
  facility_id: string
  financial_access: boolean
  first_name: string
  id: string
  is_collector: boolean // verify
  last_name: string
  permissions: Permission[]
  role: string
  seller_id: string
  seller_name: string // verify
  seller_type: string // verify
}

interface LoginResponse {
  accessToken: string
  expiresIn: number
  jwtPayload: JwtPayload
}
*/

function login(body: LoginBody): Promise<Response> {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json' },
  })
}

export default { login }
