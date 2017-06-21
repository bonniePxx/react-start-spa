import * as types from '../constants/ActionTypes'

const Org=(state={},action) => {
  switch (action.type) {
    case types.FETCH_ORG_SUCCESS:
      return Object.assign({}, state, {ORG:action.ORG})
    default:
      return state
  }
}
export default Org