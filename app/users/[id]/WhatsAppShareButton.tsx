 interface Props {
  id: string;
  baseUrl: string; 
}

export default function WhatsAppShareButton({ id }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = `${baseUrl}/product/${id}`;

  return (
    <a
      href={`https://wa.me/?text=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
      شارك على واتساب
    </a>
  );
}
