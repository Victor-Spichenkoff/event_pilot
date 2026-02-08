import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
    authRoutes,
    getLoginPathnameWithPreviousUrl,
    HOME_URL,
    isImagePath,
    protectedRoutes,
    publicRoutes
} from "@/routes"


export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isPublic = publicRoutes.includes(pathname)
    const isAuth = authRoutes.includes(pathname)

    if(isPublic || isImagePath(pathname))
        return NextResponse.next()

    const token = request.cookies.get('access_token')?.value

    if(isAuth) {
        const homeUrl = new URL(HOME_URL, request.url)
        if (token)
            return NextResponse.redirect(homeUrl)

        return NextResponse.next()
    }

    // it is protected:
    if (!token) {
        const loginUrl = new URL(getLoginPathnameWithPreviousUrl(pathname), request.url)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|api|static|favicon.ico|.jpg|.png).*)'],
}

