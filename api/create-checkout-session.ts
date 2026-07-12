import Stripe from 'stripe';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, amount, currency, message } = req.body as {
    name: string;
    amount: number;
    currency: 'R$' | 'US$';
    message?: string;
  };

  if (!name || !amount || !currency) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const stripeCurrency = currency === 'US$' ? 'usd' : 'brl';
  const unitAmount = Math.round(amount * 100);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: stripeCurrency,
          product_data: { name: 'Doação Harvard VUS' },
          unit_amount: unitAmount,
        },
        quantity: 1,
      },
    ],
    metadata: {
      name,
      currency,
      message: message ?? '',
    },
    success_url: 'https://mcporto.com?payment=success',
    cancel_url: 'https://mcporto.com#donate',
  });

  return res.status(200).json({ url: session.url });
}
