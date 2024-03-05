function filterByCity(targetCity, listingCityArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
  // return [...listingCityArray.keys()];

  
  // cityIndices.push(listingCityArray.indexOf(targetCity))
  // (listingCityArray.includes(targetCity))

  // Defines new city array
  let cityIndices = [];
  // If the og city array includes the city searched, add that city's index to the new city array
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toUpperCase() === targetCity.toUpperCase()) {
      cityIndices.push(i);
    } 
  }
  // Returns new city array after loop is done
  return cityIndices;
}
// filterByCityTest();

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
  // return [...listingPriceArray.keys()];
  
  // Defines new price array
  let priceIndices = [];
  // If the price in the og price array is greater than/equal to the min price user set AND is less than/equal to the max price the user set, add that price's index to the new price array
  for (let i = 0; i < listingPriceArray.length; i++) {
    if ((listingPriceArray[i] >= minPrice) && (listingPriceArray[i] <= maxPrice)) {
      priceIndices.push(i);
    }
  }
  // Returns new price array after loop is done
  return priceIndices;
}
// filterByPriceTest();

// LEVEL UP!
function filterByTypes(targetTypes, listingTypeArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
  // return [...listingTypeArray.keys()];

  // FIRST LEVEL UP WITH NESTED LOOPS
  // Defines new type array
  // let typeIndices = [];
  // // Goes through both arrays and if the type indices are equal to each other in both then push that type to the new type array (? I think that is what this is doing, I am still a bit confused on how nested for loops work!)
  // for (let i = 0; i < listingTypeArray.length; i++) {
  //   for (let j = 0; j < targetTypes.length; j++) {
  //     if (targetTypes[j] === listingTypeArray[i]) {
  //       typeIndices.push(i);
  //     }
  //   }
  // }
  // // Returns new type array after loop is done 
  // return typeIndices;

  // SECOND LEVEL UP WITH REFACTORING AND JS INCLUDES METHOD
  // Defines new type array
  let typeIndices = [];
  // Goes through both arrays and if the type indices are included in both then push that type to the new type array (? I think that is what this is doing, I am still a bit confused on how nested for loops work!)
  for (let i = 0; i < listingTypeArray.length; i++) {
    for (let j = 0; j < targetTypes.length; j++) {
      if (listingTypeArray[i].includes(targetTypes[j])) {
        typeIndices.push(i);
      }
    }
  }
  // Returns new type array after loop is done
  return typeIndices;  
}
// filterByTypesTest();