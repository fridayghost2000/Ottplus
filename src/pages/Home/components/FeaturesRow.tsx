interface FeatureItem {
  icon: string
  text: string
}

const featureItems: FeatureItem[] = [
  {
    icon: '/figma-assets/s5_item1.png',
    text: 'Trigger campaigns and score leads from video views.',
  },
  {
    icon: '/figma-assets/s5_item2.png',
    text: 'Publish videos directly from your CMS.',
  },
  {
    icon: '/figma-assets/s5_item3.png',
    text: 'Track video ROI in your existing dashboards.',
  },
  {
    icon: '/figma-assets/s5_item4.png',
    text: 'Stream to apps with built-in ads and subscriptions.',
  },
]

export function FeaturesRow() {
  return (
    <section className="relative w-full bg-black pt-6 pb-12 lg:pt-8 lg:pb-16">
      <div className="max-w-[1405px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1px Vertical + Corner Specular Border Wrapper matching Figma */}
        <div
          className="rounded-[24px] p-[1px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.28) 100%)',
          }}
        >
          <div
            className="rounded-[23px] px-8 sm:px-14 lg:px-20 pt-9 pb-8 lg:pt-11 lg:pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center"
            style={{
              background:
                'radial-gradient(ellipse at 50% 45%, #1d1d1f 0%, #161618 65%, #111113 100%)',
              boxShadow: 'inset 0 0 32px rgba(0, 0, 0, 0.55)',
            }}
          >
            {featureItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5"
              >
                <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <p className="text-[13.5px] sm:text-[14px] font-normal leading-[20px] text-white/75 max-w-[235px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
