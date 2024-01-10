'use server'
import { prisma } from '@syncx/prisma';
import { NextResponse } from 'next/server';

// Don't just code
// Keep security and performance in mind

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log({ body }, 'PRISMA__POST__REQUEST__CALLED');

        const newUser = await prisma.user.create({
            data: body
        })

        console.log({ newUser });
        return NextResponse.json(newUser)
    }
    catch (error) {
        console.log({ error })
    }
}

export async function GET(req: Request) {
    try {

        const allUsers = await prisma.user.findMany();
        console.log('Api hits again')

        return NextResponse.json(allUsers)

    } catch (error) {
        console.log({ error })
    }
}

//nextjs client-cache= router cache
//nextjs server-cache= request cache, data cache and nobody gets hit, then it goes to database for data fetching


