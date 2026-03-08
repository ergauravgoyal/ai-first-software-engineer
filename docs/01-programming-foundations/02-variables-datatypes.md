# Variables & Data Types

This page explores the core data structures in Python, focusing on how they store information and the methods used to manipulate them.

## 1. Lists (The Workhorse)
Lists are ordered, mutable collections that allow duplicates.

### Common Methods
```python
arr = [20, 30, 40]

arr.append(600)    # Adds to the end
arr.insert(1, 35)  # Inserts 35 at index 1
arr.remove(20)    # Removes the first occurrence of 20
arr.pop()         # Removes and returns the last element
arr.pop(0)        # Removes and returns element at index 0
arr.sort()        # Sorts the list in-place
```

### Slicing Techniques
```python
arr = [20, 30, 40, 60, 90, 100]

print(arr[1:3])   # [30, 40] (Index 1 to 2)
print(arr[1:5:2]) # [30, 60] (Step of 2)
print(arr[::-1])  # Reverses the list
```

---

## 2. Copying Mechanisms
Understanding how Python handles object references is vital to avoid bugs.

| Operation | Type | Behavior |
| --- | --- | --- |
| `b = a` | **Assignment** | Creates a reference. Changes to `b` affect `a`. |
| `b = a.copy()` | **Shallow Copy** | New outer list, but nested elements share references. |
| `b = copy.deepcopy(a)`| **Deep Copy** | Completely independent copy (including nested objects). |

---

## 3. Tuples, Sets, and Dictionaries

### Tuples
- **Ordered & Immutable**. Used for data that should not change (e.g., coordinates).
- Faster than lists.

### Sets
- **Unordered & Unique**. Used for membership testing and removing duplicates.
- **Performance**: Average $O(1)$ lookup time due to hash tables.

### Dictionaries
- **Key-Value Pairs**.
- Efficient for looking up data by a unique identifier.

---

## Summary Comparison

| Feature | List | Tuple | Set |
| --- | --- | --- | --- |
| **Syntax** | `[ ]` | `( )` | `{ }` |
| **Ordered** | Yes | Yes | No |
| **Mutable** | Yes | No | Yes |
| **Duplicates** | Yes | Yes | No |
| **Indexing** | Yes | Yes | No |
| **Performance** | Standard | Fast | Fast Lookup |

---

## Real World Usage
- **Lists**: Storing a collection of user IDs.
- **Tuples**: Returning multiple values from a function.
- **Sets**: Finding unique tags in a blog system.
- **Dictionaries**: Caching database query results.
