
// class 'CategoryHandler' is in-built in the solution file on leetcode.com
/**
 * Definition for a category handler.
 * class CategoryHandler(categories: IntArray) {
 *     fun haveSameCategory(a: Int, b: Int): Boolean
 * }
 */
class Solution {
    fun numberOfCategories(numberOfElements: Int, categoryHandler: CategoryHandler): Int {

        var numberOfCategories = numberOfElements;

        for (first in 0..<numberOfElements) {
            for (second in first + 1..<numberOfElements) {
                if (categoryHandler.haveSameCategory(first, second)) {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
}
