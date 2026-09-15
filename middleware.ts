export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request) {
  const url = new URL(request.url);

  // If the host is the checkout subdomain, silently rewrite to the checkout HTML file
  if (url.hostname === 'checkout.smrgconsulting.com') {
    url.pathname = '/checkout/index.html';
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': url.toString(),
      },
    });
  }

  // Otherwise, pass through to Vite's normal routing
  return new Response(null, {
    headers: {
      'x-middleware-next': '1',
    },
  });
}