export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email: string    = (body?.email    ?? '').trim();
    const fullname: string = (body?.fullname ?? '').trim();

    if (!email || !email.includes('@')) {
      return json({ success: false, message: 'Valid email required.' }, 400);
    }

    console.log('[request-demo]', { fullname, email });

    return json({ success: true });
  } catch (err) {
    console.error('[request-demo error]', err);
    return json({ success: false }, 500);
  }
};

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
