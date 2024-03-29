
# AirBnB SkillBuilder

## Contents
- Introduction
- Starter Code
- Deliverable
- Level Ups! (Extra Credit)

## Introduction

For this SkillBuilder, you'll be working with the Airbnb development team to prototype a new and improved search bar and filtering experience. Other developers on the team have written code that will add search results to the webpage, and your task is to make sure the *correct search results* are being added to the page based on the search term and filtering options. 

The final user experience should function [like this](https://i.imgur.com/VmUtho2.mp4).

## Starter Code

There is existing code inside `provided.js` that will implement a search and show results. This code is wired to call 3 functions you will complete inside `script.js`. These functions are meant to filter the results based on the search term and filtering options.

Note that you are writing a small bit of code here that fits into a much larger whole.  This is oftentimes how the real world works. You won't always be familiar with the majority of code in a large project. The key is to understand how your piece fits in.  

## Deliverable

Below are the 2 filtering functions you'll need to complete to finish this SkillBuilder, as well as a level up you can try (number 3)!

1) `filterByCity(targetCity, listingCityArray)`

The `targetCity` parameter will be the string the user typed into the search bar. The parameter `listingCityArray` is an array of cities for listings on the platform. This function should return the indicies of elements in `listingCityArray` that match`targetCity` ignoring capitalization/case.

*HINT: We recommend using a `for loop` to loop over each element in `listingCityArray` to compare it with `targetCity`. If an element matches, you can add its index to an array you'll return at the end of the loop.*

**Example 1** 

If `targetCity` is "San Diego" and `listingCityArray` is ["Antarctica", "Los Angeles", "San Diego"] then this function should return an array with one Number element, like this: `[2]`.  

This is because the targetCity of "San Diego" is at the second index of the array.

**Example 2** 

If `targetCity` is 'San Diego' and `listingCityArray` is ["San Diego", "Los Angeles", "san diego"] then this function should return an array with two Number elements, like this: `[0,2]`.  

This is because the elements at `listingCityArray[0]` and `listingCityArray[2]` both match "San Diego" when capitalization/case is ignored.

**TEST:** `filterByCityTest()`
<hr>

2) `filterByPrice(minPrice, maxPrice, listingPriceArray)`

The `minPrice` and `maxPrice` parameters are Numbers representing the minimum and maximum prices chosen by the user, and the `listingPriceArray` parameter is an array of Numbers representing the different prices of listings on the platform. This function should return an array of indices of all elements from `listingPriceArray` that are between the minimum and maximum price specified by the user. 

*HINT: We recommend using a `for loop` to loop over each element in `listingPriceArray` to compare it with `minPrice` and `maxPrice`. If an element it in this range, you can add its index to an array you'll return at the end of the loop.*

**Example**

If `minPrice` is `100`, `maxPrice` is `300`, and `listingPriceArray` is `[50, 120, 500, 200]` then this function should return an array with two Number elements, like this: `[1,3]`.  

This is because `120` and `200` are between the min and max price and at the 1st and 3rd index of `listingPriceArray` respectively.


**TEST:** `filterByPriceTest()`
<hr>

### Level Up! (Extra Credit)
Feel like you want to keep going? Choose one (or both!) of the following level ups to snag some extra credit:

3) `filterByTypes(targetTypes, listingTypeArray)`

There are three strings representing listing types on the platform: "entire-place", "private-room", "shared-room".

The `targetTypes` parameter will be an array of the types of listings the user has chosen to see. The `listingTypeArray` parameter will be types of various listings on the platform. This function should return an array of indicies in `listingTypeArray` matching *ANY* of the types in `targetTypes`.

*HINT: Use `nested for loops`. The outer loop will loop over each element in `listingTypeArray` and the inner loop will loop over each element in `targetTypes`. Here is [some documentation on nested loops](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/).*

**Example**

If `targetTypes` is `["entire-place", "private-room"]` and `listingTypeArray` is `["private-room", "shared-room", "shared-room", "private-room", "entire-place"]` the this function should return `[0, 3, 4]`.

**TEST:** `filterByTypesTest()`

<hr>

### Super Extra Bonus Level Up! (Extra Credit)
Refactor your nested loop solution from the above level up. Use the Javascript `includes` method to accomplish the task instead. Comment out the nested loop solution code so we can see both versions!