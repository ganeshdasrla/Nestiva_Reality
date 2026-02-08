export const WHATSAPP_NUMBER = '919000000000'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}
