import React from 'react'

export type Person = {
  id: string
  displayName: string
  structuralLogic: number
  commitment: number
  person: number
  resultRationality: number
}

interface ValueOrientationMatrixProps {
  people: Person[]
}

export const ValueOrientationMatrix: React.FC<ValueOrientationMatrixProps> = ({ people }) => {
  return (
    <div className="w-full aspect-square bg-white rounded-ldsg-400 border border-gray-border overflow-hidden">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        {/* Axes */}
        <line x1="250" y1="80" x2="250" y2="420" className="stroke-gray-border" strokeWidth="1" />
        <line x1="80" y1="250" x2="420" y2="250" className="stroke-gray-border" strokeWidth="1" />

        {/* Y-axis top label */}
        <text x="250" y="52" className="fill-dark text-[14px] font-bold" textAnchor="middle">
          <tspan x="250" dy="0">
            内容
          </tspan>
          <tspan x="250" dy="18">
            深
          </tspan>
        </text>

        {/* Y-axis bottom label */}
        <text x="250" y="445" className="fill-dark text-[14px] font-bold" textAnchor="middle">
          <tspan x="250" dy="0">
            内容
          </tspan>
          <tspan x="250" dy="18">
            浅
          </tspan>
        </text>

        {/* X-axis left label */}
        <text x="52" y="240" className="fill-dark text-[14px] font-bold" textAnchor="middle">
          <tspan x="52" dy="0">
            社会性
          </tspan>
          <tspan x="52" dy="18">
            浅
          </tspan>
        </text>

        {/* X-axis right label */}
        <text x="448" y="240" className="fill-dark text-[14px] font-bold" textAnchor="middle">
          <tspan x="448" dy="0">
            社会性
          </tspan>
          <tspan x="448" dy="18">
            深
          </tspan>
        </text>

        {/* Data points */}
        {people.map((person) => {
          const x = 80 + ((person.person + person.resultRationality) / 100) * 340
          const y = 420 - ((person.structuralLogic + person.commitment) / 100) * 340
          return (
            <g key={person.id}>
              <circle cx={x} cy={y} r="8" className="fill-primary" />
              <text x={x} y={y - 12} className="fill-dark text-[12px]" textAnchor="middle">
                {person.displayName}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
