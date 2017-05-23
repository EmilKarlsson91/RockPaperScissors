export default function(state=null, action){
  switch(action.type){
    case 'OPPONENTS_CHOICE':
    return action.payload;
    break;
  }
  return state;
}
