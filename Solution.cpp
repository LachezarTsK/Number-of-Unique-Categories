
using namespace std;

// class 'CategoryHandler' is in-built in the solution file on leetcode.com
/**
 * Definition for a category handler.
 * class CategoryHandler {
 * public:
 *     CategoryHandler(vector<int> categories);
 *     bool haveSameCategory(int a, int b);
 * };
 */

class Solution {

public:
    int numberOfCategories(int numberOfElements, CategoryHandler* categoryHandler) {

        int numberOfCategories = numberOfElements;

        for (int first = 0; first < numberOfElements; ++first) {
            for (int second = first + 1; second < numberOfElements; ++second) {
                if (categoryHandler->haveSameCategory(first, second)) {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
};
