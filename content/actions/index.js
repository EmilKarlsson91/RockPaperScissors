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
  console.log(JSON.stringify(loggedIn))
  return{
    type: 'LOGGED_IN',
    payload: loggedIn
  }
};
export const opponentsChoice = (opponentsChoice) => {
  console.log('OPPONENTS_CHOICE')
  console.log(JSON.stringify(opponentsChoice))
  return{
    type: 'OPPONENTS_CHOICE',
    payload: opponentsChoice
  }
};
export const startedFromURL = (startedFromURL) => {
  console.log( 'STARTED_FROM_URL')
  console.log(JSON.stringify(startedFromURL))
  return{
    type:  'STARTED_FROM_URL',
    payload: startedFromURL
  }
};
