import { next } from '@vercel/edge';

export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request) {
  const url = new URL(request.url);

  // If the host is the checkout subdomain, rewrite to the checkout HTML file
  if (url.hostname === 'checkout.smrgconsulting.com') {
    url.pathname = '/checkout/index.html';
    return fetch(url); 
  }

  return next();
}