export default function(state={}, action){
  switch(action.type){
    case 'RPS_SELECTED':
      return action.payload;
      break;
  }
  return state;
}
