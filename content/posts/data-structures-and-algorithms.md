---
author: "Spencer Nicol"
date: "2023-03-29"
title: "Data Structures and Algorithms"
categories: ["java"]
description: "Cliff notes from Mosh Hamedani's course for developer's who never took a computer science course"
authorImageUrl: "https://media.publit.io/file/spencer/spencer-small.webp"
imageUrl: "https://media.publit.io/file/dataStructuresAndAlgorithms/Data-Structures-and-Algorithms.jpg"
---

![](https://media.publit.io/file/dataStructuresAndAlgorithms/Data-Structures-and-Algorithms.jpg)

I thought I'd jot down some notes and concepts that I learned while going through a course beautifully put together by [Mosh Hamedani entitled Data Structures and Algorithms](https://codewithmosh.com/p/data-structures-algorithms-part1). I found this course extremely helpful. I got my college degree in finance and then my career took some surprising turns. I learned I had a talent for picking up software development and programming, however I've oftentimes found myself at a disadvantage in conversations in situations where I can't really "talk the talk". And as Mosh puts it, this course has helped me to "think like a programmer".

At the time of this post, I haven't done much coding in "Java", however so as to more easily follow along with the coding challenges, I decided to code in Java. Never hurts to try and learn another language right?

## Big O Notation

Big O notation provides a fancy way for developers to describe how scalable an algorithm is or its runtime complexity. It is known to be a common concept big companies ask questions about during interviews. They want to see if a developer understands some of the intricacies of what algorithms scale better in different situations. The O is short for "Order of".

> Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.
> -- <cite>Wikipedia</cite>

### Constant Time Complexity: O(1)

- The number of operations is constant.

```java
public static int add(int a, int b) {
  return a + b;
}
```

This is a simple function that adds two integers and returns the result.

Regardless of the values of a and b, this function performs a fixed number of operations (in this case, a single addition operation) and returns the result. This means that the time required to run this function is constant and does not change as the input values change.

### Linear Time Complexity: O(n)

- The number of operations it performs scales in direct proportion to the input.
- As the input grows, so do the number of operations, linearly. Our function needs to perform the same number of operations for every input.
- An example of this would be a "loop".

```java
public static int sum(int[] array) {
  int sum = 0;
  for (int i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
```

This function takes an array of integers as input and returns the sum of all the elements in the array.

In each iteration of the for loop, the algorithm performs a single addition operation to update the sum variable with the value of the current element in the array. Since the loop iterates over each element in the array exactly once, the number of operations required is proportional to the size of the input array.

### Quadratic Time Complexity: O(n^2)

- The number of operations it performs scales in proportion to the square of the input.
- An example of this would be a "nested loop".

```java
public static int sumPairs(int[] array) {
  int sum = 0;
  for (int i = 0; i < array.length; i++) {
    for (int j = 0; j < array.length; j++) {
      sum += array[i] + array[j];
    }
  }
  return sum;
}
```

In each iteration of the outer loop, the algorithm selects an element i from the array. In each iteration of the inner loop, the algorithm selects an element j from the array and adds the sum of the elements at indices i and j to the running total. Since the loops iterate over all possible pairs of elements in the array, the total number of operations required is proportional to the size of the input array squared.

### Logarithmic Time Complexity: O(log n)

- The number of operations grows very slowly as the input size grows.

```java
public static int binarySearch(int[] array, int target) {
  int low = 0;
  int high = array.length - 1;

  while (low <= high) {
    int mid = (low + high) / 2;
    if (array[mid] == target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```

This is an iterative binary search algorithm that searches for a target value in a sorted array.

In each iteration of the while loop, the algorithm divides the size of the search space in half by checking whether the target value is less than, greater than, or equal to the value at the midpoint of the current search space. This means that the search space is reduced by a factor of 2 in each iteration, leading to a logarithmic time complexity.

For example, if we call binarySearch with an array of size 8, it will take at most 3 iterations to find the target (since log base 2 of 8 is 3). Similarly, if we call binarySearch with an array of size 1,000,000, it will take at most 20 iterations to find the target (since log base 2 of 1,000,000 is approximately 20).

### Exponential Time Complexity: O(2^n)

- The number of operations grows at an increasing rate as the input size grows.

```java
public static int power(int base, int exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
```

This is a recursive function that computes the result of raising a base to a given exponent.

For example, if we call `power(2, 3)`, the algorithm will recursively call itself with arguments 2 and 2, then with arguments 2 and 1, and finally with arguments 2 and 0, which is the base case. This results in a total of 4 function calls.

If we call `power(2, 10)`, however, the algorithm will make 1,023 function calls, and if we call `power(2, 20)`, it will make over a million function calls!

### Cheat Sheet

![](https://media.publit.io/file/dataStructuresAndAlgorithms/big-o-notation.png)
