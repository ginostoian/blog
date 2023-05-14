const siteMetadata = {
  title: 'Portfolio | Gino Stoian',
  author: 'Gino Stoian',
  headerTitle: 'Gino Stoian',
  description: 'My personal website & blog where I share my thoughts and journey',
  snippets: 'Reuseable code snippets collected by Gino',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ginostoian.com',
  siteRepo: 'https://github.com/pycoder2000/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ginostoian@gmail.com',
  github: 'https://github.com/ginostoian',
  twitter: 'https://twitter.com/iamgino_s',
  linkedin: 'https://www.linkedin.com/in/ginostoian',
  website: 'https://ginostoian.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'iamgino_s',
  },
}

module.exports = siteMetadata
