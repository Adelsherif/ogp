// app/product/[id]/page.tsx
'use server';

interface Params {
  id: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("User not found");

  const user = await res.json();

  return {
    id: user.id,
    name: user.name,
    description: `Email: ${user.email} - شركة: ${user.company?.name || "غير متوفر"}`,
    image: `https://i.pravatar.cc/600?img=${user.id}`,
  };
}

export async function generateMetadata({ params }: { params: Params }) {
  const product = await fetchProduct(params.id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 600,
          height: 600,
        },
      ],
      type: "article",
      url: `https://ogp-wheat.vercel.app/product/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} width={300} height={300} alt={product.name} />
    </div>
  );
}
