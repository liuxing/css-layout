import React from 'react'
import Title from '../../componetns/Title'
import Toc from '../../componetns/Toc'
import routes from '../../router'

const Home = () => {
  return (
    <div>
      <Title title="目录" />
      <Toc toc={routes}/>
    </div>
  )
}

export default Home