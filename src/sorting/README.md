Sorting algorithms
==================


## Bubble sorting
The bubble algorithm is one of the less efficient algorithms.
It traverses the whole array comparing each element with its
subsequent, if the current element is greater than subsequent,
swaps the elements.
The algorithm finishes when the whole array can be traversed
withoud the need of swap elements (Cause all are ordered the right way)

1. Iterate the whole array
2. Compare each item with its subsequent
3. If item is greater than subsequent, swap elements
4. Return to step 1 until complete a traverse without any swap


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


## Insertion sort
Iterates the array from second position onwards, if element is
smallest than previous one, swap it, compare again with previous
according to its new position, swap if required and repeat until
find the right position for element. Continue with each array element.

1. Iterate array from second position onwards
2. Compare with previous one
3. If is smallest than previous, swap it and go back to step 2
4. Go to next array item and repeat since step 2


## Merge sort
This algorithm makes usage of recursion to *merge* ordered lists
into another composed ordered list.
Divides array into two lists, after that divide each lists into
two parts, repeat for each subarray until get lists of size 1.
Proceed to merge each pair of lists into another list with right order.
Repeat to merge resulting lists until end up with a single ordered list.

1. Divide array into two lists.
2. Divide subarrays recursively until end up with arrays of size 1
3. Merge each pair of lists into another lists with right order
4. Repeat step 3 with resulting lists until end up with a single ordered list
