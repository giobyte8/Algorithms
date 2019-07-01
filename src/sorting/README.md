Sorting algorithms
==================

## Selection sorting
The selection algorithm looks for the smallest element
(or greater for `DESC` sorting) of an array and put it
at begin of array. After that look for the new smallest
(from remaining numbers) and put it after previously found
smallest element. Repeat this process until all array elements
are placed on its right position.

1. Look for smallest element of array
2. Put this element at begin of array
3. Look for smallest of remaining non sorted elements
4. Put this element after latest smallest element
5. Go back to step 3 until all elements are placed on its right position
