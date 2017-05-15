export default function(state=null, action){
  switch(action.type){
    case 'GENERATED_URLS':
      return action.payload;
      break;
  }
  return state;
}
