import Home from './pages/Home'
import Horizontal from './pages/Horizontal'
import Vertical from './pages/Vertical'
import HorizontalVertical from './pages/HorizontalVertical'
import TwoColumn from './pages/TwoColumn'
import MultiColumn from './pages/MultiColumn'
import SpeedDial from './pages/SpeedDial'
import StickyFooter from './pages/StickyFooter'

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
}, {
  path: '/horizontal-vertical-center',
  meta: {
    title: '水平垂直居中'
  },
  component: HorizontalVertical
}, {
  path: '/two-column',
  meta: {
    title: '两列布局'
  },
  component: TwoColumn
}, {
  path: '/three-column',
  meta: {
    title: '三列布局'
  },
  component: TwoColumn
}, {
  path: '/multi-column',
  meta: {
    title: '多列布局'
  },
  component: MultiColumn
}, {
  path: '/speed-dial',
  meta: {
    title: '九宫格布局'
  },
  component: SpeedDial
}, {
  path: '/fullscreen',
  meta: {
    title: '全屏布局'
  },
  component: MultiColumn
}, {
  path: '/sticky-footer',
  meta: {
    title: '绝对底部(Sticky Footer)'
  },
  component: StickyFooter
}]

export default routes