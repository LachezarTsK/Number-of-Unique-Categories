
// class 'CategoryHandler' is in-built in the solution file on leetcode.com
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     constructor(categories: number[]);
 *     public haveSameCategory(a: number, b: number): boolean;
 * }
 */


function numberOfCategories(numberOfElements: number, categoryHandler: CategoryHandler): number {

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
