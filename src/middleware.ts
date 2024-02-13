import {NextRequest, NextResponse} from 'next/server'

// This function can be marked `async` if using `await` inside => (LOGIC)
export function middleware(request: NextRequest) {
    //get the pathname from the request
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'
    const token = request.cookies.get('token')?.value || ''

    //if the path is public and there is token, redirect to login
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

// See "Matching Paths" below to learn more => (MATCHER)
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail',
    ],
}