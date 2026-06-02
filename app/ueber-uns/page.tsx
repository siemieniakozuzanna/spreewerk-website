import type { Metadata } from 'next'
import { UeberHero } from '@/components/ueber-uns/UeberHero'
import { UeberMission } from '@/components/ueber-uns/UeberMission'
import { UeberStory } from '@/components/ueber-uns/UeberStory'
import { UeberWork } from '@/components/ueber-uns/UeberWork'
import { Team } from '@/components/sections/Team'
import { Certifications } from '@/components/sections/Certifications'
import { ContactCTA } from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Lernen Sie das Team hinter Spreewerk Sanierung kennen. Handwerk mit Haltung — seit Jahren in Berliner Altbauten zuhause.',
}

export default function UeberUnsPage() {
  return (
    <main>
      <UeberHero />
      <UeberMission />
      <UeberStory />
      <UeberWork />
      <Team />
      <Certifications />
      <ContactCTA />
    </main>
  )
}
