'use client'
import Link from 'next/link';

interface User {
    id?: string;
    name: string;
    email: string;
    emailVerified: Date;
    image: string;
}

const postUser = async (url: string, user: User) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        console.log({ response })

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        console.log({ responseData })
        return responseData;

    } catch (error) {
        console.error('Error:', error.message || 'Error fetching data');
    }
};

export default function page() {

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const user: User = {
                name: `Bibek Karki-${Math.floor(Math.random() * 1234)}`,
                email: `bibek${Math.floor(Math.random() * 1234)}@gmail.com`,
                emailVerified: new Date(),
                image: `https://unsplash.com/boat.jpg-${Math.floor(Math.random() * 1234)}`,
            };
            const postedData = await postUser('/api/user', user);
            console.log({ postedData });

        } catch (error) {
            console.log({ error })
        }
    }

    return (
        <>
            <Link href={'/'} className='underline my-3'>Go to lists page</Link>
            <p className='w-full bg-orange-400'>This is posting user side...</p>
            <button
                onClick={handleClick}
                className='p-2 bg-gray-200 text-black'
            >
                Post New User
            </button>
        </>
    )
}