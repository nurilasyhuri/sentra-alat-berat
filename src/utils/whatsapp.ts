import { BUSINESS_INFO } from '../data/businessInfo';

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;

export function generateGeneralInquiryUrl(topic: string = 'Kebutuhan Alat Berat'): string {
  const text =
    `Halo Sentra Alat Berat, saya ingin menyampaikan kebutuhan terkait ${topic}.\n\n` +
    `• Jenis Kebutuhan: ${topic}\n` +
    `• Unit / Merek / Model / Nomor Part: \n` +
    `• Lokasi Proyek / Pengiriman: \n` +
    `• Waktu Kebutuhan: \n\n` +
    `Mohon konfirmasi ketersediaan, spesifikasi, dan penawarannya. Terima kasih.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export const buildGeneralInquiryUrl = generateGeneralInquiryUrl;
