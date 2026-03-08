import copy
# a = int(input("Enter first Number "))
# b = int(input("Enter second Number "))
# sum = a+b
# print(sum)

arr = list

arr = [20,30,40,60, 90, 100, 200, 500]

print('Type of arr is ', type(arr))

print(arr[-1])  ## prints last number
 
print(arr[1:3]) ## prints from index 1 to 3 (exclusive of 3) Inclusive of Left Side and Exclusive of Right side [30, 40]
print(arr[1:5:2]) ## prints from index 1 to 5 (exclusive of 5) with a step of 2 ## output is [30, 60]
print(arr[:5]) ## prints from index 0 to 5 (exclusive of 5) ## output is [20, 30, 40, 60, '90']
print(arr[3:]) ## prints from index 3 to end ## output is [60, '90', 100, '200', 500]
print(arr[::-1]) ## prints the reverse of the list ## output is [500, '200', 100, '90', 60, 40, 30, 20]


arr.append(600) ## adds 600 to the end of the list as this is the way to add element in list
print(arr)

arr.insert(3, 35) ## insert element 35 at index 3
print(arr)

arr.remove(20) ## remove element 20 from the list
print(arr)

arr.pop() ## remove last element from the list
print(arr)

arr.pop(3) ## remove element at index 3 from the list
print(arr)

arr.sort() ## sort the list
print(arr)


for i in range(len(arr)):
    print("number at index ", i, "is ", arr[i])
    
brr = arr ## shallow copy
brr[1]=0
print(arr) ## Output will be [30, 0, 40, 90, 100, 200, 500]
print(brr) ## Output will be [30, 0, 40, 90, 100, 200, 500]

crr = arr.copy() ## deep copy (pass by reference)
crr[1]=2000
print(arr) ## Output will be [30, 0, 40, 90, 100, 200, 500]
print(crr) ## Output will be [30, 2000, 40, 90, 100, 200, 500]

single_dimension_array =[1,2,3,5,6,10,23]

double_dimension_array = [[1,2,3],[4,5,6],[7,8,9]]

print(double_dimension_array[1][1]) ## Output will be 5


copy_array= double_dimension_array
double_dimension_array[1][1] = 2000
print(copy_array)
print(double_dimension_array) 

## For a 1D list, copy() creates a new list that does not affect the original, and deepcopy() behaves the same as copy().”

# for 2-D List
##= (assignment) → creates a reference, not a copy.
## Both variables point to the same object, so changes affect both.

## copy() (shallow copy) → creates a new outer list, but nested lists still share references.
## So modifying a nested element will affect the original.

## deepcopy() → creates a completely independent copy, including all nested objects.
## Modifying the copy will NOT affect the original.


animals = ["cat", "dog", "mouse"]
animals_copy = animals.copy()
animals_deepcopy = animals.copy()

animals[1] = "rabbit"
animals[2] = animals[2].upper()
print(animals) ## Output will be ['cat', 'rabbit', 'MOUSE']
print(animals_copy) ## Output will be ['cat', 'dog', 'mouse']
print(animals_deepcopy) ## Output will be ['cat', 'dog', 'mouse']

animals_copy[1] = ["lion", "tiger"]
print(animals_copy) ## Output will be ['cat', 'lion', 'tiger', 'mouse']
print(animals_deepcopy) ## Output will be ['cat', 'dog', 'mouse']

numbers =[[1,2], [3,4]]
print(numbers)

numbers_copy = copy.deepcopy(numbers)
numbers_copy[1] = [5,6]
print(numbers_copy)


## Tuples

tples = tuple()
tples = (1,2,3)
print(tples)


## Sets

my_set = set()  ## technically same as list but we can't have non unique elements

my_set.add(1)
my_set.add(2)
my_set.add(3)
my_set.add("Guava")
my_set.add("Apple")
my_set.add("Dragonfruit")
my_set.add(2) ## 2 already exists in this
print(my_set) ## {1, 2, 3, 'Apple', 'Dragonfruit', 'Guava'}

## Searching in a Python set has average time complexity O(1) because sets use hash tables for constant-time lookup.

"""
Comparison of List, Tuple, and Set in Python

Feature            List            Tuple                     Set
---------------------------------------------------------------------------
Syntax             [ ]             ( )                       { }
Ordered            Yes             Yes                       No
Mutable            Yes             No                        Yes
Allows Duplicates  Yes             Yes                       No
Indexing           Yes             Yes                       No
Hashable           No              Yes (if elements immutable) No
Performance        Slower than tuple Faster than list       Fast lookup

Summary:
- List  : Ordered, mutable, allows duplicates.
- Tuple : Ordered, immutable, slightly faster than lists.
- Set   : Unordered collection of unique elements with fast lookup.
"""


##Dict

my_dict ={
    1:"Rahul",
    2:"Ujjwal",
    3:"Ashutosh"
}


for key in my_dict:
    print(my_dict[key])
