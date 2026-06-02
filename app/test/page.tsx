import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { Certifications } from '@/components/sections/Certifications'
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { FuerWen } from '@/components/sections/FuerWen'
import { AltbauExpertise } from '@/components/sections/AltbauExpertise'
import { Team } from '@/components/sections/Team'
import { Gallery } from '@/components/sections/Gallery'
import { FAQ } from '@/components/sections/FAQ'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { globalFaq } from '@/lib/faq'

export default function TestPage() {
  const lbSchema = localBusinessSchema()
  const faqSchemaData = faqSchema(globalFaq)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedProject />
        <Certifications />
        <BeforeAfterShowcase />
        <Services />
        <Process />
        <FuerWen />
        <AltbauExpertise />
        <Team />
        <Gallery />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  )
}
