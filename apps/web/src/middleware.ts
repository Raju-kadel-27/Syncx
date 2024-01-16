import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        // Here middleware matches the path starting with:
        // Positive matcher
        '/comment/:path',
        '/post/:path',
        '/rating/:path',
        '/collection/:path',
        '/info/:path',
        '/about/:path',
        '/settings/:path',
        '/bounty/:path',

        // Here middlewares negates the path starting with:
        // Negative matcher
        "/((?!api/|_next/|_proxy/|_auth/|_static|_vercel|favicon.ico|sitemap.xml).*)", ,
    ]
}

export default async function middleware(
    req: NextRequest,
    ev: NextFetchEvent
) {
    const path = req.nextUrl.pathname;
    const host = req.headers.get("host");

    console.log('***** Middleware has been rendered here ****')
    console.log({ path });
    console.log({ host });
    console.log('Middlware will run...')

    // if (
    //     process.env.NODE_ENV !== "development" &&
    //     !(
    //         host?.includes("localhost") ||
    //         host?.includes("papermark.io") ||
    //         host?.endsWith(".vercel.app")
    //     )
    // ) {
    //     return DomainMiddleware(req);
    // }

    // if (
    //     path !== "/" &&
    //     path !== "/register" &&
    //     path !== "/privacy" &&
    //     path !== "/oss-friends" &&
    //     path !== "/pricing" &&
    //     path !== "/docsend-alternatives" &&
    //     path !== "/launch-week" &&
    //     path !== "/open-source-investors" &&
    //     path !== "/ai" &&
    //     path !== "/share-notion-page" &&
    //     !path.startsWith("/alternatives/") &&
    //     !path.startsWith("/blog/") &&
    //     !path.startsWith("/view/")
    // ) {
    //     return AppMiddleware(req);
    // }

    // return NextResponse.fromJSON({ message: 'Hello from middleware!' });
    return NextResponse.next();
}
