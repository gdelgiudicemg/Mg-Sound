// This is a wrapper for Stripe to avoid issues with server-side rendering
// and to load Stripe only when needed

let stripePromise: Promise<any> | null = null;

export const loadStripe = () => {
  if (!stripePromise) {
    // Replace this with your actual Stripe publishable key
    stripePromise = (window as any).Stripe('rk_test_51RUwQPQJiDG7fOnqVZpc4NeXGs2svpXz2IHp2XMTgb66HoAHFPCXqlIjU0sAZv7ZD9R6JENc1bPGjmjb3tp1TWdJ00H6Sjjc66');
  }
  return stripePromise;
};