import { useRef, useId, useMemo } from 'react'
import { motion } from 'motion/react'
import DottedMapPackage from 'dotted-map'

// Support both ESM and CJS bundle shapes for dotted-map
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DottedMap = (DottedMapPackage as any).default || DottedMapPackage

export interface MapPoint {
  lat: number
  lng: number
  label?: string
}

export interface WorldMapProps {
  dots?: Array<{
    start: MapPoint
    end: MapPoint
  }>
  lineColor?: string
  className?: string
}

export function WorldMap({
  dots = [],
  lineColor = '#7A5AF8',
  className = '',
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const gradientId = useId()

  // Generate dotted map SVG once with memoization
  const svgMap = useMemo(() => {
    try {
      const map = new DottedMap({ height: 100, grid: 'diagonal' })
      return map.getSVG({
        radius: 0.22,
        color: '#FFFFFF35',
        shape: 'circle',
        backgroundColor: '#090D14',
      })
    } catch {
      return ''
    }
  }, [])

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className={`w-full aspect-[2/1] bg-[#090D14] rounded-2xl relative font-sans overflow-hidden ${className}`}>
      {svgMap && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)] pointer-events-none select-none object-cover opacity-80"
          alt="OTTFast Global Video CDN Distribution Map"
          height="495"
          width="1056"
          draggable={false}
        />
      )}

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Curved Paths between nodes */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 0.4 * i,
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 1.2,
                  ease: 'easeInOut',
                }}
              />
            </g>
          )
        })}

        {/* Origin & Destination Pulse Rings and Points */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  className="drop-shadow-[0_0_8px_rgba(122,90,248,0.8)]"
                />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.8"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                {dot.start.label && (
                  <text
                    x={startPoint.x}
                    y={startPoint.y - 8}
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="600"
                    textAnchor="middle"
                    className="font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  >
                    {dot.start.label}
                  </text>
                )}
              </g>

              {/* End Point */}
              <g>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill={lineColor}
                  className="drop-shadow-[0_0_8px_rgba(122,90,248,0.8)]"
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill={lineColor}
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.8"
                    to="0"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                {dot.end.label && (
                  <text
                    x={endPoint.x}
                    y={endPoint.y - 8}
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="600"
                    textAnchor="middle"
                    className="font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  >
                    {dot.end.label}
                  </text>
                )}
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default WorldMap
