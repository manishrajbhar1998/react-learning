import { GOLD_RATE_DEC, GOLD_RATE_INC } from "./Action";

export default function reducer(state, action) {

  let updatedSstate = {}
  switch (action.type) {
    case GOLD_RATE_INC:
      updatedSstate = {
        ...state,
        gold: state.gold + 1,
      };
      break;
      case GOLD_RATE_DEC:
       updatedSstate = {
        ...state,
        gold: state.gold - 1,
      };
      break;
    default:
      return state;
  }

  return updatedSstate;
}
