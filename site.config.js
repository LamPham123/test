// Site Configuration
// This file contains your site's general settings
// You can manage email addresses, social media links, and other contact information from here

export const siteConfig = {
  // Site general information
  site: {
    name: "Lam Pham - Portfolio",
    description: "A portfolio website for Lam Pham",
    url: "localhost:3000",
    author: "Lam Pham"
  },

  // Contact information
  contact: {
    // Main contact email
    email: "lamtpham705@gmail.com",
    
    // Privacy policy related email
    privacyEmail: "lamtpham705@gmail.com",
    
    // Support email
    supportEmail: "lamtpham705@gmail.com",
    
    // Phone number (optional)
    phone: "2534553286",
    
    // Mailing address
    address: {
      street: "123 Test Street",
      city: "Seattle",
      state: "WA",
      zipCode: "98105",
      country: "United States"
    }
  },

  // Social media links
  social: {
    twitter: "https://twitter.com/statuessg",
    github: "https://github.com/accretional/statue",
    linkedin: "https://linkedin.com/company/statuessg",
    facebook: "https://facebook.com/statuessg",
    instagram: "https://instagram.com/statuessg",
    youtube: "https://youtube.com/@statuessg"
  },

  // Legal pages specific settings
  legal: {
    // Privacy policy last updated date
    privacyPolicyLastUpdated: "2024-01-15",
    
    // Terms of use last updated date
    termsLastUpdated: "2024-01-15",
    
    // CCPA/CPRA compliance for California state
    isCaliforniaCompliant: true,
    
    // Do Not Sell page additional information
    doNotSell: {
      processingTime: "15 business days",
      confirmationRequired: true
    }
  },

  // Search configuration
  search: {
    // Enable/disable search functionality
    enabled: false,

    // UI options
    placeholder: 'Search...',
    noResultsText: 'No results found',

    // Search behavior
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 10,

    // Result display options
    showCategories: true,
    showDates: true,
    showExcerpts: true,
    excerptLength: 30
  },

  // SEO and meta information
  seo: {
    defaultTitle: "Statue SSG - Static Site Generator",
    titleTemplate: "%s | Statue SSG",
    defaultDescription: "A simple static site generator for markdown content with SvelteKit",
    keywords: ["static site generator", "markdown", "sveltekit", "ssg"],
    ogImage: "/images/og-image.png",
    twitterCard: "summary_large_image"
  }
};

// Export configuration
export default siteConfig; 
