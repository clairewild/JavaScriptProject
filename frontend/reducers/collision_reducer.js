import merge from 'lodash/merge';

import { ADD_COLLISION, DELETE_COLLISION, RESET } from '../actions/actions.js';

const CollisionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let key = String(action.pos);
  switch(action.type) {
    case ADD_COLLISION:
      newState[key] = {
        pos: action.pos
      };
      return newState;
    case DELETE_COLLISION:
      delete newState[key];
      return newState;
    case RESET:
      return {};
    default:
      return state;
  }
}

export default CollisionReducer;
