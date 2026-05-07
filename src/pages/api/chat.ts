export const prerender = false;

import type { APIRoute } from 'astro';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are Deltra AI, a friendly and concise assistant for Deltra — an all-in-one school management platform built for Indonesian K-12 schools.

You help visitors understand:
- What Deltra does (student records, attendance, grading, finance, AI teaching support, parent communication)
- How the AI features work (weekly KPIs, at-risk student flags, auto lesson plans, exam question generation)
- Pricing (per-student annual pricing, flexible for small to large schools — tell them to contact for a quote)
- How to request a demo (via the "Request a Demo" button on the page or by contacting the team)
- That Deltra is built specifically for Indonesian curriculum and schools

Keep answers short (2–4 sentences max). Be warm and helpful. If asked something unrelated to Deltra or education, politely redirect to Deltra topics.`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const userMessage: string = body?.message ?? '';

    if (!userMessage.trim()) {
      return new Response(JSON.stringify({ error: 'No message provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const history: { role: 'user' | 'assistant'; content: string }[] = body?.history ?? [];

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 200,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history.slice(-6),
        { role: 'user', content: userMessage },
      ],
    });

    const reply = completion.choices[0]?.message?.content ?? "I'm not sure about that. Try asking about Deltra`s features or request a demo!";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[chat API error]', err);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
