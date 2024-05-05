
using System;

// class 'CategoryHandler' is in-built in the solution file on leetcode.com
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     public CategoryHandler(int[] categories);
 *     public bool HaveSameCategory(int a, int b);
 * }
 */

public class Solution
{
    public int NumberOfCategories(int numberOfElements, CategoryHandler categoryHandler)
    {
        int numberOfCategories = numberOfElements;

        for (int first = 0; first < numberOfElements; ++first)
        {
            for (int second = first + 1; second < numberOfElements; ++second)
            {
                if (categoryHandler.HaveSameCategory(first, second))
                {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
}
