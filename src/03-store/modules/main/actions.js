import axios from 'axios'

import * as types from './mutation-types'

export default {
  async getMovie (context, params) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${params}?api_key=52532197e622cb20ee90156e53dbcb06`)
    context.commit(types.SET_MOVIE, response.data)
  },
  async findMovie (context, params) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52532197e622cb20ee90156e53dbcb06&query=${params}`)
    context.commit(types.SET_MOVIES_LIST, response.data.results)
  }
}
