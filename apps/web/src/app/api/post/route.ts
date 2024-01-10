import { prisma } from '@syncx/prisma'

export async function POST(req: Request) {
    try {
        const body = req.json();
        console.log({ body });

        const newPost = {
            title: "Sample Post",
            authorName: "John Doe",
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // const createdPost = await prisma.post.create({
        //     data: newPost,
        // });
        return Response.json({ message: 'success' })

    } catch (error) {
        console.log({ error })
    }
}
