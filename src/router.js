import Home from './pages/Home'
import Horizontal from './pages/Horizontal'
import Vertical from './pages/Vertical'

const routes = [{
  exact: true,
  path: '/',
  meta: {
    title: '主页'
  },
  component: Home
}, {
  path: '/horizontal-center',
  meta: {
    title: '水平居中'
  },
  component: Horizontal
}, {
  path: '/vertical-center',
  meta: {
    title: '垂直居中'
  },
  component: Vertical
}]

export default routes