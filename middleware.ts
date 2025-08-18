import { redirect } from "next/dist/server/api-utils";
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어 실행확인");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 리다이렉트");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
