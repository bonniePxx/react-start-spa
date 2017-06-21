import * as types from '../constants/ActionTypes'

const Org=(state={},action) => {
  switch (action.type) {
    case types.FETCH_ORG_SUCCESS:
      return Object.assign({}, state, {org:action.orgs})
    default:
      return state
  }
}
export default Org