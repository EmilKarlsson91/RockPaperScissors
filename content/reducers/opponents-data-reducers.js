export default function(state=null, action){
  switch(action.type){
    case 'OPPONENTS_DATA':
    return action.payload;
    break;
  }
  return state;
}
