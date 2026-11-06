/**
 * Data layer for the profile page.
 * Edit this file to change all profile content in one place.
 */

export const profile = {
  name: 'Mazen Hamada',
  handle: '@mazenhamada37-ui',
  initials: 'MH',
  role: 'Software Engineer · Frontend Developer',
  location: 'Cairo, Egypt',
  availability: 'Open to work — remote or freelance',
  email: 'mazenhamada37@gmail.com',
  phone: '+20 100 732 5032',
  phoneRaw: '+201007325032',
  portfolio: 'https://premium-portfolio-deck-cgqpbav.gamma.site/',
  github: 'https://github.com/mazenhamada37-ui',
  linkedin: 'https://www.linkedin.com/in/mazen-hamada-dev/',
  whatsapp: 'https://wa.me/201007325032',
  avatar: '/avatar.jpg',
  bio: 'Software engineer based in Cairo, building responsive, high-performance web applications. I turn designs into clean, scalable code — from pixel-perfect UI to REST API integration — with a focus on performance and modern user experience.',
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/mazenhamada37-ui' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/mazen-hamada-dev/' },
    { label: 'Portfolio', icon: 'globe', href: 'https://premium-portfolio-deck-cgqpbav.gamma.site/' },
    { label: 'Email', icon: 'mail', href: 'mailto:mazenhamada37@gmail.com' },
    { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/201007325032' },
    { label: 'Call', icon: 'phone', href: 'tel:+201007325032' },
  ],
};

export const projects = [
  {
    id: 'connect-me',
    name: 'Connect-ME',
    tag: 'React · CSS3',
    desc: 'A developer bio-link and contact hub with a minimal, mobile-first UI and direct social channel integrations.',
    tech: ['React', 'CSS3', 'Responsive'],
    live: 'https://connect-me-nine.vercel.app/',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    tag: 'JavaScript · REST API',
    desc: 'Responsive storefront with dynamic product displays, interactive category navigation and API-driven data flow.',
    tech: ['JavaScript', 'HTML5', 'REST API'],
    live: 'https://e-commerce-eight-drab-92.vercel.app',
  },
  {
    id: 'school-system',
    name: 'School System',
    tag: 'HTML · JavaScript',
    desc: 'A school management system with responsive layouts and straightforward data management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://school-system-one-inky.vercel.app',
  },
  {
    id: 'al-daqqa-engineering',
    name: 'ENG Portfolio',
    tag: 'HTML · CSS',
    desc: 'An engineering portfolio with vision, services, projects and contact sections — built with hand-written HTML and CSS.',
    tech: ['HTML', 'CSS'],
    live: 'https://eng-one-eta.vercel.app/',
  },
  {
    id: 'learning-platform',
    name: 'Learning Platform',
    tag: 'React · TypeScript',
    desc: 'A full learning platform built with React, TypeScript and Tailwind — Firebase-backed with a Vite build.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    live: 'https://learning-plarform-f5mgdn2gn-mazen-hamada-s-projects.vercel.app/',
  },
  {
    id: 'service-lab',
    name: 'Service Lab',
    tag: 'HTML · CSS',
    desc: 'An Arabic RTL landing page for a laptop repair center — services, pricing packages, testimonials and a WhatsApp booking form.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://laptop-nine-flax.vercel.app/',
  },
];

export const education = {
  degree: 'B.Sc.',
  field: 'Information System',
  school: 'Obour Institutes',
  text: 'Studies covering information systems, software engineering and web development fundamentals.',
};

export const contact = [
  {
    label: 'Email',
    icon: 'mail',
    value: 'mazenhamada37@gmail.com',
    href: 'mailto:mazenhamada37@gmail.com',
  },
  {
    label: 'WhatsApp',
    icon: 'whatsapp',
    value: '+20 100 732 5032',
    href: 'https://wa.me/201007325032',
  },
  {
    label: 'Call',
    icon: 'phone',
    value: '+20 100 732 5032',
    href: 'tel:+201007325032',
  },
  {
    label: 'Portfolio',
    icon: 'globe',
    value: 'premium-portfolio-deck',
    href: 'https://premium-portfolio-deck-cgqpbav.gamma.site/',
  },
  {
    label: 'GitHub',
    icon: 'github',
    value: 'mazenhamada37-ui',
    href: 'https://github.com/mazenhamada37-ui',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    value: 'mazen-hamada-dev',
    href: 'https://www.linkedin.com/in/mazen-hamada-dev/',
  },
];
