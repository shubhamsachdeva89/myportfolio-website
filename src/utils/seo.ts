export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

export class SEOManager {
  private static instance: SEOManager;
  
  static getInstance(): SEOManager {
    if (!SEOManager.instance) {
      SEOManager.instance = new SEOManager();
    }
    return SEOManager.instance;
  }

  updatePageSEO(data: SEOData): void {
    // Update title
    document.title = data.title;

    // Update or create meta tags
    this.updateMetaTag('description', data.description);
    
    if (data.keywords) {
      this.updateMetaTag('keywords', data.keywords.join(', '));
    }

    if (data.author) {
      this.updateMetaTag('author', data.author);
    }

    // Update Open Graph tags
    this.updateMetaProperty('og:title', data.title);
    this.updateMetaProperty('og:description', data.description);
    this.updateMetaProperty('og:type', data.type || 'website');
    
    if (data.url) {
      this.updateMetaProperty('og:url', data.url);
      this.updateLinkTag('canonical', data.url);
    }

    if (data.image) {
      this.updateMetaProperty('og:image', data.image);
    }

    if (data.publishedTime) {
      this.updateMetaProperty('article:published_time', data.publishedTime);
    }

    if (data.modifiedTime) {
      this.updateMetaProperty('article:modified_time', data.modifiedTime);
    }

    if (data.author) {
      this.updateMetaProperty('article:author', data.author);
    }

    if (data.section) {
      this.updateMetaProperty('article:section', data.section);
    }

    // Update Twitter Card tags
    this.updateMetaName('twitter:card', 'summary_large_image');
    this.updateMetaName('twitter:title', data.title);
    this.updateMetaName('twitter:description', data.description);
    
    if (data.image) {
      this.updateMetaName('twitter:image', data.image);
    }
  }

  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private updateMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private updateMetaName(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private updateLinkTag(rel: string, href: string): void {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  generateStructuredData(type: 'BlogPosting' | 'Person' | 'WebSite', data: any): void {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'BlogPosting':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "publisher": {
            "@type": "Person",
            "name": data.author
          },
          "datePublished": data.publishedTime,
          "dateModified": data.modifiedTime || data.publishedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        };
        break;
        
      case 'Person':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": data.name,
          "jobTitle": data.jobTitle,
          "description": data.description,
          "url": data.url,
          "sameAs": data.sameAs,
          "knowsAbout": data.knowsAbout,
          "alumniOf": data.alumniOf,
          "worksFor": data.worksFor
        };
        break;
        
      case 'WebSite':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "author": {
            "@type": "Person",
            "name": data.author
          }
        };
        break;
    }

    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  generateSitemap(pages: Array<{ url: string; lastmod?: string; priority?: number }>): string {
    const baseUrl = window.location.origin;
    
    const urlEntries = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <priority>${page.priority || 0.5}</priority>
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries}
</urlset>`;
  }

  generateRobotsTxt(): string {
    const baseUrl = window.location.origin;
    
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
  }
}

export const seoManager = SEOManager.getInstance();