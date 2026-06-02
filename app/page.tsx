import { Hero } from '@/components/sections/Hero'
import { Reviews } from '@/components/sections/Reviews'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { Services } from '@/components/sections/Services'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase'
import { Process } from '@/components/sections/Process'
import { FuerWen } from '@/components/sections/FuerWen'
import { AltbauExpertise } from '@/components/sections/AltbauExpertise'
import { Team } from '@/components/sections/Team'
import { Gallery } from '@/components/sections/Gallery'
import { Certifications, CertificationsPartners } from '@/components/sections/Certifications'
import { FAQ } from '@/components/sections/FAQ'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { globalFaq } from '@/lib/faq'

export default function HomePage() {
  const lbSchema = localBusinessSchema()
  const faqSchemaData = faqSchema(globalFaq)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedProject />
        <Certifications />
        <BeforeAfterShowcase />
        <Services />
        <Reviews />
        <Process />
        <FuerWen />
        <AltbauExpertise />
        <Team />
        <Gallery />
        <FAQ />
        <CertificationsPartners />
        <ContactCTA />
      </main>
    </>
  )
}
