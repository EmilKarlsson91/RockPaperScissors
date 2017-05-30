export default function(state=null, action){
  switch(action.type){
    case 'ACTIVE_BRANCH_PARAMS':
      return action.payload;
      break;
  }
  return state;
}
