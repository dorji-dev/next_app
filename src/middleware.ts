import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const productId = request.nextUrl.pathname.split("/").at(-1);
  // set the product id as part of request header to access in the server components
  // without having to prop drill from page or layout
  // This is just a workaround for now until Next supports such access
  requestHeaders.set("product_id", productId as string);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/product/:path*"],
};
