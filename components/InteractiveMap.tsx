import * as React from "react"
import { DottedMap } from "./ui/dotted-map"
import type { Marker } from "./ui/dotted-map"

type MyMarker = Marker & {
  overlay: {
    countryCode: string
    label: string
  }
}

const markers: MyMarker[] = [
  { lat: 37.0902, lng: -95.7129, size: 1.8, pulse: false, overlay: { countryCode: "us", label: "USA" } },
  { lat: 56.1304, lng: -106.3468, size: 1.8, pulse: false, overlay: { countryCode: "ca", label: "Canada" } },
  { lat: 55.3781, lng: -3.4360, size: 1.8, pulse: false, overlay: { countryCode: "gb", label: "UK" } },
  { lat: 51.1657, lng: 10.4515, size: 1.8, pulse: false, overlay: { countryCode: "de", label: "Germany" } },
  { lat: 20.5937, lng: 78.9629, size: 1.8, pulse: false, overlay: { countryCode: "in", label: "India" } },
  { lat: 35.8617, lng: 104.1954, size: 1.8, pulse: false, overlay: { countryCode: "cn", label: "China" } },
  { lat: -25.2744, lng: 133.7751, size: 1.8, pulse: false, overlay: { countryCode: "au", label: "Australia" } },
  { lat: 23.4241, lng: 53.8478, size: 1.5, pulse: false, overlay: { countryCode: "ae", label: "UAE" } },
  { lat: 38.9637, lng: 35.2433, size: 1.5, pulse: false, overlay: { countryCode: "tr", label: "Turkey" } },
  { lat: 47.1625, lng: 19.5033, size: 1.5, pulse: false, overlay: { countryCode: "hu", label: "Hungary" } },
  { lat: 35.1264, lng: 33.4299, size: 1.2, pulse: false, overlay: { countryCode: "cy", label: "Cyprus" } },
]

export function InteractiveMap() {
  const id = React.useId()
  return (
    <section className="pb-16 md:pb-32 px-4 bg-bg relative overflow-hidden -mt-8 md:-mt-16">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative h-[450px] md:h-[700px] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm p-4 md:p-8">
          <DottedMap<MyMarker>
            className="opacity-100"
            style={{ color: '#9ca3af' }}
            markers={markers}
            dotColor="currentColor"
            markerColor="var(--rc-accent)"
            width={200}
            height={100}
            mapSamples={4000}
            dotRadius={0.4}
            renderMarkerOverlay={({ marker, x, y, r, index }) => {
              const { countryCode, label } = marker.overlay
              const href = `https://flagcdn.com/w80/${countryCode}.webp`

              const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-")
              
              // Marker dimensions
              const whiteGapR = r * 0.85
              const imgR = r * 0.7

              // Pill dimensions
              const fontSize = r * 0.8
              const pillH = r * 1.6
              const pillW = label.length * (fontSize * 0.6) + r * 1.5
              
              // Positioning
              const lineLength = r * 0.4
              const pillX = x + r + lineLength
              const pillY = y - pillH / 2

              return (
                <g style={{ pointerEvents: "none" }}>
                  {/* Connecting dot */}
                  <circle cx={x + r + lineLength / 2} cy={y} r={r * 0.1} fill="#888888" />

                  {/* Inner white gap */}
                  <circle cx={x} cy={y} r={whiteGapR} fill="#ffffff" />

                  {/* Flag image */}
                  <defs>
                    <clipPath id={clipId}>
                      <circle cx={x} cy={y} r={imgR} />
                    </clipPath>
                  </defs>
                  <image
                    href={href}
                    x={x - imgR}
                    y={y - imgR}
                    width={imgR * 2}
                    height={imgR * 2}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#${clipId})`}
                  />

                  {/* Label Pill */}
                  <rect
                    x={pillX}
                    y={pillY}
                    width={pillW}
                    height={pillH}
                    rx={pillH / 2}
                    fill="#8a8a8a"
                  />
                  <text
                    x={pillX + pillW / 2}
                    y={y + fontSize * 0.35}
                    fontSize={fontSize}
                    fill="white"
                    fontWeight="500"
                    fontFamily="Inter, sans-serif"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                </g>
              )
            }}
          />
        </div>
      </div>
    </section>
  )
}
