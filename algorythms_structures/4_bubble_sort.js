/*
* Bubble sort is a simple, comparison-based sorting algorithm that repeatedly steps through the list,
* compares adjacent elements, and swaps them if they are in the wrong order.
* The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
*
* Worst Case: O(n2)
*
*
* Characteristics and When to Use:

Simple Implementation: Bubble sort is very easy to understand and implement.
In-Place Sorting: It sorts the list in-place, minimizing memory usage.
Adaptive: Bubble sort is adaptive, meaning that if the list is already sorted or nearly sorted,
it can detect this and terminate early, resulting in O(n) time complexity. This is due to the swapped flag in the optimized version.
Inefficient for Large Datasets: The O(n2) time complexity makes it inefficient for large lists.

* When Not to Use:
- Large Datasets: Due to its quadratic time complexity, bubble sort is not suitable for sorting large lists.
Use algorithms like merge sort, quicksort, or heapsort for better performance.
- Most Practical Scenarios: Other sorting algorithms are generally more efficient and preferred in most real-world scenarios.
Bubble sort is mainly used for educational purposes to illustrate basic sorting concepts.
* */


const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count += 1;
      if (array[j + 1] < array[j]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log('length: ', arr.length);
console.log(bubbleSort(arr));
console.log('count: ', count);

// complexity: O(n*n)