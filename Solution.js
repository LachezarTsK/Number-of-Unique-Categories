
// class 'CategoryHandler' is in-built in the solution file on leetcode.com
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     @param {number[]} categories
 *     constructor(categories);
 * 
 *     @param {number} a
 *     @param {number} b
 *     @return {boolean}
 *     haveSameCategory(a, b);
 * }
 */


/**
 * @param {number} numberOfElements
 * @param {CategoryHandler} categoryHandler
 * @return {number}
 */
var numberOfCategories = function (numberOfElements, categoryHandler) {

    let numberOfCategories = numberOfElements;

    for (let first = 0; first < numberOfElements; ++first) {
        for (let second = first + 1; second < numberOfElements; ++second) {
            if (categoryHandler.haveSameCategory(first, second)) {
                --numberOfCategories;
                break;
            }
        }
    }
    return numberOfCategories;
};
