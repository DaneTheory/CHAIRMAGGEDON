import * as types  from '../constants/actionTypes'


export function toggleOpen(open) {
  return {
    type: types.TOGGLE_OPEN,
    open
  };
}

export function getChairsSuccess(chairsArr, chairs) {
  return {
    type: types.GET_CHAIRS,
    getChairs: getChairs(chairsArr, chairs),
    chairs: chairsArr
  };
}

export function getChairs(chairsArr, chairs) {
    const start = start || 1;
        for (let i = start; i <= chairs; i++) {
          chairsArr.push(i);
          chairsArr.sort(function(a, b) {
            return a - b;
          })
        }
      return chairsArr
}
