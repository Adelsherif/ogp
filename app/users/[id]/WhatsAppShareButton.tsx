interface Props {
  url: string;
  title: string;
}

// نستخدم async function عشان Turbopack
export default async function WhatsAppShareButton({ url, title }: Props) {
  return (
    <div className="flex gap-2 mt-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        واتساب
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        فيسبوك
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-400 text-white rounded"
      >
        تويتر
      </a>
    </div>
  );
}


