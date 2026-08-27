import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export default function SEO({ title, description, canonicalPath = '' }: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = `${title} | SMRG Consulting`;

    // 2. Update or Create Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Inject AEO / SEO Organization & Service Schema (JSON-LD)
    let schemaScript = document.querySelector('#smrg-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', 'smrg-schema');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "SMRG Consulting",
      "founder": "Valentine Saint Martin",
      "description": "Engineering structured operational utilities and AI-powered inbound intake systems for modern enterprises.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "areaServed": ["New York City", "The Bronx", "National"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Enterprise Operational Utilities",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RRU™ Real Estate Readiness Utility" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LIRU™ Legal Intake Readiness Utility" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IRU™ Immigration Intake Readiness Utility" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Childcare OCC™ Operational Capacity Controller" } }
        ]
      }
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [title, description]);

  return null;
}