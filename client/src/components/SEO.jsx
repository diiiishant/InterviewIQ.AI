import { useEffect } from 'react';

function SEO({ title, description, keywords, ogImage, ogUrl }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper function to create or update meta tags
    const updateMetaTag = (attribute, value, content) => {
      if (!content) return;
      
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    // Helper to create or update link tags (e.g. canonical)
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (tag) {
        tag.setAttribute('href', href);
      } else {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('href', href);
        document.head.appendChild(tag);
      }
    };

    const currentOrigin = window.location.origin;
    
    // Resolve absolute URL for images (social shares require absolute paths)
    const absoluteImageUrl = ogImage
      ? (ogImage.startsWith('http') ? ogImage : `${currentOrigin}${ogImage}`)
      : `${currentOrigin}/img1.png`;

    // Resolve absolute URL for page
    const absolutePageUrl = ogUrl
      ? (ogUrl.startsWith('http') ? ogUrl : `${currentOrigin}${ogUrl}`)
      : window.location.href;

    // 2. Update Primary Meta Tags
    if (description) {
      updateMetaTag('name', 'description', description);
    }
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }
    if (title) {
      updateMetaTag('name', 'title', title);
    }

    // 3. Update Open Graph Tags
    if (title) {
      updateMetaTag('property', 'og:title', title);
    }
    if (description) {
      updateMetaTag('property', 'og:description', description);
    }
    updateMetaTag('property', 'og:image', absoluteImageUrl);
    updateMetaTag('property', 'og:url', absolutePageUrl);

    // 4. Update Twitter Card Tags
    if (title) {
      updateMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      updateMetaTag('name', 'twitter:description', description);
    }
    updateMetaTag('name', 'twitter:image', absoluteImageUrl);
    updateMetaTag('name', 'twitter:url', absolutePageUrl);

    // 5. Update Canonical Tag
    updateLinkTag('canonical', absolutePageUrl);

  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}

export default SEO;
