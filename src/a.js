import b from './b.js'
import moment from 'moment'
import jquery from 'jquery'
import React from 'react'
import { render } from 'react-dom'
let time = moment().endOf('day').fromNow()
class A  {
   name = '11'
}
console.log(b, A.name, time)
render((<h1>time</h1>), document.body)