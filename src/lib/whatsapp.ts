import { clinicInfo } from '../data/siteData'

export function openWhatsAppMessage(lines: string[]) {
  const message = lines.filter((line) => line.trim()).join('\n')
  const url = `https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}