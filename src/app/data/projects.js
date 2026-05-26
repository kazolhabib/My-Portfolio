export const PROJECTS = [
  {
    id: "zenith-erp",
    title: "Zenith ERP Dashboard",
    category: "Full-Stack Development",
    short: "Enterprise resource planning system tailored for modern SaaS architectures.",
    description: "Zenith ERP is a highly customizable, enterprise-grade portal managing metrics, accounting models, client communications, and real-time analytical streaming dashboards. Built as a server-centric Next.js application, it delivers high security, fast static loading, and instant client caching.",
    tech: ["Next.js 16", "Tailwind CSS v4", "React 19", "MongoDB"],
    challenges: "Faced significant bottlenecks during high-frequency database read operations. Resolved this by introducing custom caching layers and implementing React Suspense boundaries around live analytics widgets to keep pages responsive.",
    improvements: "Plan to integrate AI-powered predictive accounting algorithms and transition to WebSockets for sub-millisecond real-time analytical chart updates.",
    live: "https://zenith-demo.kazol.dev",
    github: "https://github.com/kazolhabib/zenith-erp",
    image: "/kazol-habib-v2.png" // We can reuse the cleaned user headshot or fallback style
  },
  {
    id: "aura-shop",
    title: "Aura E-Commerce Engine",
    category: "Frontend & Backend",
    short: "Premium, responsive e-commerce portal with fluid checkout animations.",
    description: "Aura E-Commerce is a visual-centric luxury online storefront. Featuring interactive animated shopping bags, seamless secure Better Auth credentials, dynamic database inventory controls, and a fully custom payment integration framework.",
    tech: ["React 19", "Node.js", "MongoDB", "Better Auth", "Daisy UI"],
    challenges: "Integrating complex cart animations while preserving Core Web Vitals (LCP/INP). Achieved optimal performance by leveraging Framer Motion layout animations and lazy-loading heavy media components.",
    improvements: "Plan to implement a multi-tenant merchant dashboard and support localized multi-currency conversion hooks.",
    live: "https://aura-shop.kazol.dev",
    github: "https://github.com/kazolhabib/aura-ecommerce",
    image: "/kazol-habib-v2.png"
  },
  {
    id: "chronos-landing",
    title: "Chronos Agency Landing",
    category: "Webflow & Motion Design",
    short: "Elite editorial marketing site with complex responsive transition sequences.",
    description: "Chronos is a modernist marketing platform built for a creative visual agency. Focuses heavily on complex visual rhythms, editorial grids, custom Webflow CMS items, and high-fidelity staggered entrance motion sequences.",
    tech: ["Webflow Expert", "CMS Architecture", "Tailwind CSS", "Framer Motion"],
    challenges: "Maintaining consistent high frame rates (60FPS+) for dense visual animations on low-powered mobile devices. Solved by replacing heavy heavy clip-path triggers with highly-optimized CSS transforms.",
    improvements: "Plan to optimize assets through fully automated compression scripts and integrate headless CMS connections.",
    live: "https://chronos-agency.kazol.dev",
    github: "https://github.com/kazolhabib/chronos-landing",
    image: "/kazol-habib-v2.png"
  }
];
