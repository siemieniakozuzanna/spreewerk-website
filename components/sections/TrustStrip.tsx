import { company } from '@/lib/company'

const reviewPlatforms = [
  { abbr: 'ProvenExpert' },
  { abbr: 'Houzz' },
  { abbr: 'Google' },
]

export function TrustStrip() {
  const allBadges = [
    ...company.memberships.map((m) => ({ abbr: m.abbr })),
    ...reviewPlatforms,
  ]

  return (
    <div className="bg-navy border-b border-white/10">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="w-px h-6 bg-blue flex-shrink-0" />
          <p className="text-white/60 text-[13px] font-body">
            Zertifiziertes Handwerksunternehmen - Berlin
          </p>
        </div>
        <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto scrollbar-none -mr-6 sm:mr-0 pr-6 sm:pr-0 sm:flex-wrap">
          {allBadges.map((badge, i) => (
            <span key={badge.abbr} className="flex items-center gap-5 sm:gap-7 flex-shrink-0">
              <span className="text-white/40 text-[12px] font-medium font-body tracking-wide whitespace-nowrap">
                {badge.abbr}
              </span>
              {i < allBadges.length - 1 && (
                <span className="w-px h-3 bg-white/20 flex-shrink-0" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
