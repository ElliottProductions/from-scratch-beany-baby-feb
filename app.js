// import functions and grab DOM elements
import { getCryptids, getCryptid } from "./fetch-utils.js";

const cryptidContainer = document.querySelector('.cryptid-list');
// let state
let cryptidList = [];

// set event listeners 

window.addEventListener('load', async() => {
  cryptidList = getCryptids():

  for (let cryptid of cryptidList){
    const cryptidEl = renderCryptid(cryptid);

    cryptidContainer.append(cryptidEl);
  }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
