import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import './index.scss'

const Toc = ({ toc }) => (
  <ul className="toc">
    {toc.map((item, i) => {
      if (item.path === '/') return null
      return <li key={item.path} ><Link to={item.path}><Button>{item.meta.title}</Button></Link></li>
    })}
  </ul>
)

Toc.defaultprops = {
  toc: []
}

export default Toc