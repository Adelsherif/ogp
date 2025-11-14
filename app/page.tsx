import Link from 'next/link';

type User = {
  id: number;
  name: string;
};

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 },
  });
  const users: User[] = await res.json();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '1rem' }}>Users List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '0.5rem' }}>
            <Link 
              href={`/users/${user.id}`} 
              style={{ color: '#0070f3', textDecoration: 'none' }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
