import React from 'react'
import './index.css'

const CircularProgress = props => {
  const {
    value: uncheckedValue = 0, // 值 (0 - 1)
    radius = 60, // 圆环半径
    strokeWidth = 10, // 填充宽度
    strokeFilledColor = '#f5222d', // 填充背景色
    strokeUnfilledColor = '#fff1f0', // 未填充背景色
    backgroundColor = 'none', // 圆环背景色 (中心区域)
    transitionDuration = '0.6s', // 动画时长
    text = '', // 文字内容
    textFontSize = '14', // 文字字号
    textColor = '#f5222d', // 文字颜色
  } = props

  const value = !(uncheckedValue >= 0 && uncheckedValue <= 1)
    ? uncheckedValue > 1 ? 1 : 0
    : uncheckedValue

  const innerRadius = radius - 0.5 * strokeWidth
  const innerDiameter = 2 * innerRadius

  return (
    <svg
      className="circular-progress"
      width={radius * 2}
      height={radius * 2}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={radius}
        cy={radius}
        r={innerRadius}
        stroke={strokeUnfilledColor}
        strokeWidth={strokeWidth}
        strokeDashoffset={innerDiameter * Math.PI}
        fill={backgroundColor}
      />
      <circle
        className="circular-progress__light"
        style={{ transitionDuration }}
        cx={radius}
        cy={radius}
        r={innerRadius}
        stroke={strokeFilledColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`
          ${innerDiameter * Math.PI * value},
          ${innerDiameter * Math.PI}`}
        fill={backgroundColor}
      />
      <text
        className="circular-progress__text"
        style={{
          dominantBaseline: 'middle',
          textAnchor: 'middle',
        }}
        x={radius}
        y={radius}
        fontSize={textFontSize}
        fill={textColor}
      >
        {text}
      </text>
    </svg>
  )
}

export default CircularProgress
