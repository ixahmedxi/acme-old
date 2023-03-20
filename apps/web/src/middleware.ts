import type { NextRequest } from 'next/server';
import { getAuth, withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicPaths = ['/', '/sign-in*', '/sign-up*', '/api*'];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))),
  );
};

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  const { userId } = getAuth(request);

  if (!userId) {
    const homeUrl = new URL('/', request.url);
    homeUrl.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(homeUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: '/((?!_next/image|_next/static|favicon.ico).*)',
};
