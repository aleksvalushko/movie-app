import lodash from 'lodash'

import * as types from './mutation-types'

export default {
  [types.SET_MOVIE](state, payload) {
    state.movie = lodash.cloneDeep(payload)
  },
  [types.SET_MOVIES_LIST](state, payload) {
    state.moviesList = lodash.cloneDeep(payload)
  }
}
