export default function(state=null, action){
  switch(action.type){
    case 'RPS_SELECTED':
      return action.payload;
      break;
  }
  return state;
}
