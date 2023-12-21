// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
  return (fare) => {
    return fare * num;
  };
};

const fareMultiplierByTwo = createFareMultiplier(2);

const fareMultiplierByFive = createFareMultiplier(5);

const fare = 10;
const fareMultipliedByTwo = fareMultiplierByTwo(fare);

const fareMultipliedByFive = fareMultiplierByFive(fare);

// console.log(fareMultipliedByTwo); // = 20 (doubled fare)

// console.log(fareMultipliedByFive); // = 50 (fare * 5)

// FARE DOUBLER
const fareDoubler = createFareMultiplier(2);

// FARE TRIPLER
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(array);
};
