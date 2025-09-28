/*
* Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element (in case of ascending order)
* from the unsorted portion of the list and placing it at the beginning. The algorithm divides the list into two parts:
* the sorted portion (built up from start to end) and the unsorted portion (the remainder of the list).
*
* Characteristics and When to Use:
- In-Place Sorting: Selection sort sorts the list in-place, minimizing memory usage.
- Simple Implementation: The algorithm is relatively simple to understand and implement.
- Quadratic Time Complexity: The O(n2) time complexity makes it inefficient for large lists.
- Minimizes Swaps: Selection sort performs a minimal number of swaps compared to some other sorting algorithms.
This can be advantageous when swap operations are expensive (e.g., writing to memory in embedded systems).
*
*
* When Not to Use:
- Large Datasets: Due to its quadratic time complexity, selection sort is not suitable for sorting large lists.
Other algorithms like merge sort, quicksort, or heapsort offer significantly better performance for larger datasets.
- Nearly Sorted Data: Selection sort does not take advantage of any existing order in the input list. Algorithms like insertion sort perform better on nearly sorted data.
*
* */

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i; j < array.length; j++) {
      count += 1;
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
    }
    const tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log('arr length: ', arr.length)
console.log('count: ', count);

// complexity O(n*n)
