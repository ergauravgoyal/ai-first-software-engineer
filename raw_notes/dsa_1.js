// time complexity: Relation between input size and execution time

// Best Case Average Case Worst Case


// For time complexity, largest polynomial is considered.

// For space complexity, largest memory is considered. 

// For Linear Search it will be O(n)

// Lets dive input

// Given that I have a list of 10 elements, I want to find element in list, if it exists return index else -1

let arr = [1,2,3,4,5,6,7,8,9,10]
let key_to_be_search = 7


function linearSearch(arr,key_to_be_search){
    for(let i =0; i<arr.length;i++){
    if(arr[i] == key_to_be_search){
        return i
    }
   return -1
}
}
console.log(linearSearch(arr,key_to_be_search))

// For Binary Search it will be O(log n)


// Now find the complexity of below code

for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      
    }
}

when i=0, j will run from 0 to 3 (4 iterations)  total Work is 1+2+3+4 which is (n*(n+1)) /2 which is (n2+n)/2  => O(n2) as largest polynomial is n2

when i=1 j will run from 1 to 3 (3 iterations)

when i =2 j will run 2 to 3(2 iterations)

when i =3 j will run 3..3 (1 iterations)

// now i is iterating over n elements and j is iterating over n elements, so it will be O(n*n) = O(n^2)

for(i=0; i<n;i++){
    for(j=0;j<m;j++){

    }
    for(k=0;k<n;k++){

    }
}

lets suppose n=10, m =  (m+n)n => O( n2+mn)

//i loop will run n times, j will run m*n times and k will run n*n


for(let i=1;i<=n; i++){
    for(j=1;j<=n;j+=i)
}

lets suppose N=6
// when i is 1 j will run 6 times
// when i is 2 j will run 1,3,5 (3)
// when i is 3 j will run 1, 4 (2)
// when i is 4 j will run 1,5 (2)
// when i is 5 j will run 1,6 (2)
// when i is 6 j will run 6 (1)

Bubble Sort

Let suppose I have an array A =[5,4,2,1,3] now I want to see it to [1,2,3,4,5]

Principal for Bubble sort is Largest Bubble Pops out first

In Each iteration, we place largest element at the end


We just traverse the array from 0 to N-1
and just i=> j a[i] > a[i+1 then swap]  i.e. left element is greater than right than swap it

Pictorial Diagram of Bubble sort in graph


Lets start with 5,4,2,1,3

First Iteration 4,2,1,3,5
Second Iteration 2,1,3,4,5
Second Iteration 1,2,3,4,5




If dont make any swap in the end, that means there is no inversion. that means array is sorted






