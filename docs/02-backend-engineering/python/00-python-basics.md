# Level 0: Python Basics

This section covers the fundamental building blocks of Python programming, from basic data types to advanced collection manipulation.

## Primitive vs. Non-Primitive Data Types

### 1. Primitive Data Types
These represent single, immutable values.

| Type | Description | Example |
| --- | --- | --- |
| **int** | Whole numbers. | `10`, `-5` |
| **float** | Decimal numbers. | `3.14`, `2.0` |
| **str** | Textual data. | `"Python"`, `'Basic'` |
| **bool** | Truth values. | `True`, `False` |

### 2. Non-Primitive Data Types (Collections)
These are containers that hold multiple values.

| Type | Characteristics | Syntax |
| --- | --- | --- |
| **List** | Ordered, Mutable, Allows Duplicates | `[1, 2, 2]` |
| **Tuple** | Ordered, Immutable, Allows Duplicates | `(1, 2, 2)` |
| **Set** | Unordered, Mutable, Unique Elements Only | `{1, 2, 3}` |
| **Dict** | Key-Value Pairs, Mutable | `{"id": 1}` |

---

## Mastering Lists

Lists are the most versatile data structure in Python.

### Slicing Techniques
```python
arr = [20, 30, 40, 60, 90, 100]

print(arr[-1])    # Last element (100)
print(arr[1:3])   # Index 1 to 2 ([30, 40])
print(arr[1:5:2]) # Step of 2 ([30, 60])
print(arr[::-1])  # Reverse the list
```

### Essential Methods
- `.append(x)`: Adds `x` to the end.
- `.insert(i, x)`: Inserts `x` at index `i`.
- `.remove(x)`: Removes the first occurrence of `x`.
- `.pop(i)`: Removes and returns element at index `i` (default last).
- `.sort()`: Sorts the list in-place.

---

## Mutability & Copying

Understanding how Python passes data is critical for avoiding bugs.

### Shallow vs. Deep Copy
```python
import copy

# Shallow Copy (references top-level only)
brr = arr.copy() 

# Deep Copy (completely independent, including nested objects)
crr = copy.deepcopy(arr) 
```

**Key Difference**: For a 1D list, `copy()` and `deepcopy()` behave similarly. For nested (2D) lists, `copy()` still shares references to internal lists, while `deepcopy()` creates entirely new ones.

---

## Sets and Dictionaries

### Sets ($O(1)$ Lookup)
Sets are powered by hash tables, making membership testing extremely fast.
```python
my_set = {1, 2, 3}
my_set.add("Apple")
# Searching is average O(1) time complexity.
```

### Dictionaries
Store data in key-value pairs for efficient retrieval.
```python
my_dict = {1: "Rahul", 2: "Ujjwal"}
for key in my_dict:
    print(my_dict[key])
```

---

## Comparison Summary

| Feature | List | Tuple | Set |
| --- | --- | --- | --- |
| **Ordered** | Yes | Yes | No |
| **Mutable** | Yes | No | Yes |
| **Duplicates** | Yes | Yes | No |
| **Indexing** | Yes | Yes | No |
| **Lookup** | $O(n)$ | $O(n)$ | $O(1)$ |

---

## Logic & Control Flow

Control flow allows your program to make decisions and repeat tasks.

### 1. Conditionals
```python
age = 20
if age >= 18:
    print("Adult")
elif age > 12:
    print("Teen")
else:
    print("Child")
```

### 2. Loops

Loops are used for repeating a block of code.

#### The `for` Loop
Commonly used to iterate over a sequence (list, tuple, string).
```python
# Basic iteration
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)

# Using range() for counters
for i in range(5):  # 0 to 4
    print(i)

# Using enumerate() for index and value
for index, fruit in enumerate(fruits):
    print(f"Index {index}: {fruit}")
```

#### The `while` Loop
Repeats as long as a condition is `True`.
```python
count = 0
while count < 3:
    print(f"Inside while: {count}")
    count += 1
else:
    print("While loop condition became false")
```

#### Loop Control: `break` & `continue`
- `break`: Stops the loop entirely.
- `continue`: Skips the current iteration and moves to the next.

---

## Functions

Functions allow you to wrap a block of code and reuse it.

```python
def greet(name, message="Welcome"):
    """Function to greet a person"""
    return f"{message}, {name}!"

# Calling the function
print(greet("Gaurav"))
print(greet("Gaurav", "Hello"))
```

---

## Pythonic Idioms: List Comprehensions

List comprehensions provide a concise way to create lists based on existing lists.

```python
numbers = [1, 2, 3, 4, 5]

# Traditional way
squares = []
for n in numbers:
    squares.append(n**2)

# List Comprehension way (Superior)
squares = [n**2 for n in numbers]
```

---

## Exception Handling

Robust backend code must handle errors gracefully without crashing the entire system.

```python
try:
    with open("missing_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("Error: The file was not found.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
finally:
    print("Execution complete.")
```

---

## File System Operations

Interacting with the file system is a core task for any backend engineer. Python's `with` statement ensures files are properly closed after operations.

### 1. Simple Text Files
```python
# Reading a file
with open("data.txt", "r") as file:
    content = file.read()

# Writing to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!")
```

### 2. JSON Operations
JSON is the standard format for web APIs. Always use the `json` module.
```python
import json

# Reading JSON
with open("config.json", "r") as file:
    data = json.load(file)

# Writing JSON
with open("output.json", "w") as file:
    json.dump(data, file, indent=4)
```

### 3. CSV Operations
CSV files are common for data processing and spreadsheet interoperability.
```python
import csv

# Reading CSV as Dictionaries
with open("data.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row["name"], row["email"])
```
