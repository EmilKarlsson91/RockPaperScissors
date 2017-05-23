export default function(state=null, action){
  switch(action.type){
    case 'STARTED_FROM_URL':
      return action.payload;
      break;
  }
  return state;
}
