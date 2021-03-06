// @flow

import OtherModesView from './otherModes'
import BusView from './bus'

export default [
  {
    id: 'bus',
    title: 'Bus',
    rnVectorIcon: {iconName: 'bus'},
    component: BusView,
  },
  {
    id: 'otherModes',
    title: 'Other Modes',
    rnVectorIcon: {iconName: 'boat'},
    component: OtherModesView,
  },
]
