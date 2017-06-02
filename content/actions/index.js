export const selectedRPS = (currentRPS) => {
  console.log('RPS_SELECTED');
  console.log(JSON.stringify(currentRPS))
  return{
    type: 'RPS_SELECTED',
    payload: currentRPS
  }
};
export const generatedUrls = (currentUrls) => {
  console.log('GENERATED_URLS')
  console.log(JSON.stringify(currentUrls))
  return{
    type: 'GENERATED_URLS',
    payload: currentUrls
  }
};
export const loggedIn = (loggedIn) => {
  console.log('LOGGED_IN')
  console.log(loggedIn)
  return{
    type: 'LOGGED_IN',
    payload: loggedIn
  }
};
export const opponentsData = (opponentsData) => {
  console.log('OPPONENTS_DATA')
  console.log(JSON.stringify(opponentsData))
  return{
    type: 'OPPONENTS_DATA',
    payload: opponentsData
  }
};
export const setStartedFromURL = (setStartedFromURL) => {
  console.log('STARTED_FROM_URL')
  console.log(setStartedFromURL)
  return{
    type: 'STARTED_FROM_URL',
    payload: setStartedFromURL
  }
};
export const activeBranchParams = (activeBranchParams) => {
  console.log('ACTIVE_BRANCH_PARAMS');
  console.log(activeBranchParams);
  return{
    type: 'ACTIVE_BRANCH_PARAMS',
    payload: activeBranchParams
  }
};
