import { company } from './company'
import type { Service } from './services'
import type { FAQItem } from './faq'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: company.name,
    url: 'https://spreewerk.de',
    logo: 'https://spreewerk.de/assets/logo/logo.png',
    image: 'https://spreewerk.de/assets/hero/hero-3.png',
    description: company.description,
    foundingDate: company.foundingYear,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: company.address.country,
    },
    areaServed: company.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    memberOf: company.memberships.map((m) => ({
      '@type': 'Organization',
      name: m.name,
    })),
  }
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} Berlin`,
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: 'https://spreewerk.de',
    },
    areaServed: { '@type': 'City', name: 'Berlin' },
    description: service.intro,
    url: `https://spreewerk.de/leistungen/${service.slug}`,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(items: FAQItem[] | { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => {
      const question = 'question' in item ? item.question : item.q
      const answer = 'answer' in item ? item.answer : item.a
      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      }
    }),
  }
}
