# Introduction to Algorithms & Sorting

## Overview

Algorithms are the foundation of efficient software engineering. They represent a set of well-defined instructions to solve a specific problem. A critical part of mastering algorithms is understanding their efficiency via complexity analysis.

## Key Concepts

### Algorithmic Thinking

- Focus on logical steps to solve a problem.
- Goal: Find the most efficient solution in terms of time and space.

### Complexity Analysis

- **Time Complexity**: The mathematical relation between the input size ($n$) and the execution time.
- **Space Complexity**: The relation between the input size ($n$) and the memory/storage consumed.
- **Asymptotic Analysis**: We focus on the "Big O" notation, considering only the largest polynomial term as $n$ grows toward infinity.

#### Common Complexities

- **O(1)**: Constant time.
- **O(log n)**: Logarithmic time (e.g., Binary Search).
- **O(n)**: Linear time (e.g., Linear Search).
- **O(n log n)**: Linearithmic time (e.g., Merge Sort).
- **O(n^2)**: Quadratic time (e.g., Bubble Sort, Nested loops).

## Examples

### Linear Search

Linear search iterates through the list element by element.

```javascript
function linearSearch(arr, key_to_be_search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key_to_be_search) {
            return i;
        }
    }
    return -1;
}
```

**Complexity**: $O(n)$

### Bubble Sort

**Principle**: "Largest Bubble Pops out first."

In each iteration, we compare adjacent elements and swap them if they are in the wrong order (i.e., the left element is greater than the right element). This ensures that the largest unsorted element "bubbles up" to its correct position at the end of the array.

#### Trace Example: `[5, 4, 2, 1, 3]`

- **Initial**: `[5, 4, 2, 1, 3]`
- **Iteration 1**: `[4, 2, 1, 3, 5]` (5 moved to end)
- **Iteration 2**: `[2, 1, 3, 4, 5]` (4 moved to its position)
- **Iteration 3**: `[1, 2, 3, 4, 5]` (Sorted)

#### Optimization: Early Exit

If we complete a full pass through the array without making a single swap, it means there are no inversions left and the array is already sorted. We can terminate the algorithm early to save time.

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
```

**Complexity**: 
- **Worst Case**: $O(n^2)$
- **Best Case**: $O(n)$ (with optimized early exit)

### Nested Loop Analysis (Quadratic)

When an inner loop depends on the outer loop, the total work is often the sum of an arithmetic progression.

```javascript
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        // Constant work
    }
}
```

Iterations: $n + (n-1) + (n-2) + ... + 1 = \frac{n(n+1)}{2} = \frac{n^2 + n}{2}$
**Result**: $O(n^2)$

### Harmonic Series Analysis (Logarithmic Step)

In this case, the inner loop's step increases with each iteration of the outer loop.

```javascript
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j += i) {
        // Work
    }
}
```

#### Step-by-Step Trace (Example for $n=6$)

- **i = 1**: $j$ runs 1 to 6 (step 1) $\rightarrow$ **6 iterations** ($1, 2, 3, 4, 5, 6$)
- **i = 2**: $j$ runs 1 to 6 (step 2) $\rightarrow$ **3 iterations** ($1, 3, 5$)
- **i = 3**: $j$ runs 1 to 6 (step 3) $\rightarrow$ **2 iterations** ($1, 4$)
- **i = 4**: $j$ runs 1 to 6 (step 4) $\rightarrow$ **2 iterations** ($1, 5$)
- **i = 5**: $j$ runs 1 to 6 (step 5) $\rightarrow$ **2 iterations** ($1, 6$)
- **i = 6**: $j$ runs 1 to 6 (step 6) $\rightarrow$ **1 iteration** ($1$)

#### Mathematical Analysis

Total work: $n \times (1/1 + 1/2 + 1/3 + ... + 1/n)$.
This is the **Harmonic Series**, approximating $n \ln(n)$.

**Result**: $O(n \log n)$

### Multi-Variable Analysis

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        // Work
    }
    for (let k = 0; k < n; k++) {
        // Work
    }
}
```

Total Work: $n \times (m + n) = n^2 + mn$

**Result**: $O(n^2 + mn)$

## Real World Usage

- **Simplicity**: Bubble sort is easy to understand and implement, making it a great teaching tool.
- **Nearly Sorted Data**: With the "early exit" optimization, it performs well on data that is already mostly sorted.
- **Performance Budgeting**: complexity analysis helps engineers predict if a system will scale as input grows.
- **Algorithm Choice**: Understanding $O(n \log n)$ vs $O(n^2)$ is the difference between a system that crashes and one that thrives under load.

## Resources

- [Bubble Sort - GeeksforGeeks](https://www.geeksforgeeks.org/bubble-sort-algorithm/)
- [Big O Notation - Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)
- [Algorithmic Complexity Cheat Sheet](https://www.bigocheatsheet.com/)
