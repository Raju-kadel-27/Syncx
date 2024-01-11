'use client'

import Link from 'next/link';
import useSWR from 'swr';

interface User {
  id?: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const allUsers = await response.json();
  return allUsers;
};

export default function Home() {
  const { data, error, isValidating } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false
  })

  console.log({
    data,
    error,
    isValidating,
  });

  if (error) return <div>Failed to load</div>;

  if (isValidating) return <div>Loading...</div>;

  return (
    <main className="h-screen bg-gray-100">

      <h1 className='bg-red-500 text-white'>List of all users in database</h1>

      <Link href={'/product'} className='underline my-3 mx-4'>Go to product page</Link>
      <Link href={'/feature'} className='underline my-3'>Go to feature page</Link>

      <div className='bg-black my-5 p-3'>
        {data.map(({ id, name, email, emailVerified, image }: User) => (
          <p key={id} className='my-4 text-white border-1 border-b-slate-50'>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
            <li>{image}</li>
          </p>
        ))}
      </div>
    </main>
  );
}
