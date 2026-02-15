export const CONTACT_PHONE_DISPLAY = '+91-6301754949'
export const CONTACT_PHONE_E164 = '916301754949'
export const CONTACT_EMAIL = 'connect@srinestivaproptech'
export const INSTAGRAM_HANDLE = 'srinestivaproptech'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`

export const WHATSAPP_NUMBER = CONTACT_PHONE_E164
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export function getSmsLink(message: string): string {
  return `sms:+${CONTACT_PHONE_E164}?body=${encodeURIComponent(message)}`
}

export function getMailToLink(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
