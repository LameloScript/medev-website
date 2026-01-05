export async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret || !token) return { success: false }
  const body = new URLSearchParams({ secret, response: token }).toString()
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })
  const data = await res.json()
  const ok = !!data.success && (typeof data.score !== 'number' || data.score >= 0.5)
  return { success: ok, raw: data }
}
