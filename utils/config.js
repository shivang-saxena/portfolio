const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://portfolio-snowy-kappa.vercel.app/';

export const avatar = '/images/avatar-shivang.jpg';
