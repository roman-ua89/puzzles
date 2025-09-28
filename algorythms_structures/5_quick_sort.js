// K&R Quicksort
// complexity: O(n2)
// ділимо масив на підмасиви і кожний раз рекурсивно обираємо опорний елемент у кожного масиву, частіше центральний
// елементи менше опорного в один масив, елементи більше опорного в інший
// для кожного з підмасивів виконується та сама операція
// продовжується до тих пір, поки довжина масиву буде рівна 1

/*
* Quicksort is a highly efficient, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element
* from the array and partitioning the other elements into two sub-arrays, according to whether they are
* less than or greater than the pivot. The sub-arrays are then sorted recursively.
*
*
* Characteristics and When to Use:

Efficient: Quicksort is generally one of the fastest sorting algorithms for average-case scenarios.
Divide and Conquer: It effectively breaks down the problem into smaller subproblems.
In-Place (with modifications): Quicksort can be implemented as an in-place sorting algorithm, although the recursive
calls use stack space (O(log n) on average).
Sensitive to Pivot Choice: The choice of pivot significantly impacts performance. Good pivot selection strategies
(e.g., random pivot, median of three) help to avoid worst-case scenarios.
When Not to Use:

Guaranteed Performance is Critical: While quicksort has excellent average-case performance, its worst-case O(n2)
time complexity might be unacceptable in some applications where guaranteed performance is crucial. In such cases,
algorithms like merge sort (which has O(n log n) time complexity in all cases) might be preferred.
Small Datasets: For very small datasets, the overhead of the recursive calls in quicksort might outweigh its
benefits compared to simpler algorithms like insertion sort.
*
*
* */

// O(log2n*2) vs O(n*n) bubble
/*
* n = 128; 0.6s vs 16s
* n = 1024; 10s vs 17 min
* */

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('result: ', quickSort(arr));
console.log('count: ', count);

