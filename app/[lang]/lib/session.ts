import 'server-only'
import { cookies } from 'next/headers'
import { JWTPayload, SignJWT, jwtVerify } from 'jose'
 
const secretKey = "asassasas"
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

// Use it when a user successfully logged in able to query to user's email. 
export async function createSession(userEmail: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ userEmail, expiresAt })
 
  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
};  

export function deleteSession() {
    cookies().delete('session')
  }
  