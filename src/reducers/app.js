import * as types from '../constants/ActionTypes'

const app = (state = {}, action) => {
  switch (action.type) {
    case types.START_LOADING:   //请求api数据时
      return {
        loading: true
      }
    case types.FINISH_LOADING:
      return {
        loading: false
      }
    default:
      return state
  }
}
export default app