"use client";

interface Props {
  id: string;
}

export default function WhatsAppShareButton({ id }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const fullUrl = `${baseUrl}/product/${id}`;

  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullUrl)}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      className="inline-block px-4 py-2 bg-green-500 text-white rounded"
    >
      شارك على واتساب
    </a>
  );
}
