
package main

// class 'CategoryHandler' is in-built in the solution file on leetcode.com
/**
 * Definition for a category handler.
 * type CategoryHandler interface {
 *  HaveSameCategory(int, int) bool
 * }
 */
func numberOfCategories(numberOfElements int, categoryHandler CategoryHandler) int {

	var numberOfCategories = numberOfElements

	for first := 0; first < numberOfElements; first++ {
		for second := first + 1; second < numberOfElements; second++ {
			if categoryHandler.haveSameCategory(first, second) {
				numberOfCategories--
				break
			}
		}
	}
	return numberOfCategories
}
