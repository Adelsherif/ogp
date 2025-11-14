// app/product/[id]/WhatsAppShareButton.tsx
interface Props {
  id: string;
  baseUrl: string;
}

export default function WhatsAppShareButton({ id, baseUrl }: Props) {
  const fullUrl = `${baseUrl}/product/${id}`;

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(fullUrl)}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-green-500 text-white rounded"
    >
      شارك على واتساب
    </a>
  );
}
