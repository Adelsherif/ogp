import SEO from '@/components/SEO';

export default function BlogPost({ post }) {
  return (
    <>
      <SEO
        title={`${post.title} | مدونة MyStore`}
        description={post.summary}
        image={post.image}
        url={`https://yourdomain.com/blog/${post.slug}`}
      />

      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://api.example.com/blog/${params.slug}`).then(res => res.json());
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/blog').then(res => res.json());
  const paths = posts.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}
