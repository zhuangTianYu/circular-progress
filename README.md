# circular-progress

## about

React component for display circular progress data with svg.

## preview

https://codepen.io/zhuangtianyu/pen/ZEWmKEj

## install

```bash
npm i @sorciere/circular-progress
```

## props

| name | type | default | detail |
| - | - | - | - |
| value | number | 0 | 百分比, 取值范围 [0 - 1] |
| radius | number | 60 | 圆环半径, 单位 px |
| strokeWidth | number | 10 | 数据填充宽度, 单位 px |
| strokeFilledColor | string | #f5222d | 数据填充背景色 |
| strokeUnfilledColor | string | #fff1f0 | 数据未填充背景色 |
| backgroundColor | string | none | 圆环背景色, 默认 none |
| transitionDuration | string | 0.6s | 动画时长 |
| text | string | '' | 填充文字 |
| textFontSize | number | 14 | 填充文字字号 |
| textColor | string | #f5222d | 填充文字颜色 |

## start

```js
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CircularProgress from '@sorciere/circular-progress'
import './app.css' // if needed

const App = () => {
  const [value, setValue] = useState(0.1)
  const [text, setText] = useState('')

  useEffect(() => {
    setText(`${(value * 100).toFixed(2)}%`)
  }, [value])

  return (
    <div className="app">
      <CircularProgress value={value} text={text} />
      <div className="button-group">
        <button onClick={() => setValue(value + 0.1)}>+</button>
        <button onClick={() => setValue(value - 0.1)}>-</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
```
