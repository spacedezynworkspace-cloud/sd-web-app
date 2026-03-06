import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

const LOGIN_PORTAL = '/dashboard-login-portal';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env['NEXTAUTH_SECRET'],
  });

  const { pathname } = req.nextUrl;

  // 🔐 Protect admin routes
  // if (pathname.startsWith('/dashboard')) {
  if (!token) {
    return NextResponse.redirect(new URL(LOGIN_PORTAL, req.url));
  }
  // }

  // 🔐 Protect director routes
  // if (pathname.startsWith('/director')) {
  //   if (!token || token.role !== 'director') {
  //     return NextResponse.redirect(new URL('/unauthorized', req.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/director/:path*', '/supervisor/:path*'],
};
