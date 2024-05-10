Recursion is a technique for solving problems where the solution to a particular problem depends on the solution to a smaller instance of the same problem. In programming languages, if a program allows you to call a function inside the same function, then it is called a recursive call of the function.

The strategy for solving problems using recursion is to break the problem into smaller problems that are of the same type as the original problem. We can solve the smaller problems in the same manner, and then combine the solutions to solve the original problem.

We should consider that there are two cases for recursion: base case and recursive case. The base case is the case where the problem can be solved without further recursion. The recursive case is the case where the problem cannot be solved without further recursion. When we reach the base case case we can stop the recursion and avoid an infinite loop.

Eg: Factorial of a number

- Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; 

> e.g.: factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24, factorial of 2 is 2 * 1 equals 2, factorial of one is 1, and —special case— factorial zero (0!) is always 1.

step 1: Identify the base case. In this case, the base case is when the number is equal to 0. If the number is 0, then we return 1.

step 2: Identify the recursive case. In this case, the recursive case is when the number is greater than 0. If the number is greater than 0, then we return the number multiplied by the factorial of the number minus 1.

We've now identified the base case and the recursive case. Now we can write the code.

```js
function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1);
}
```

If we wrap the above code in a function and call it with the number 4, we get the following:

```js
factorial(4) // 24
```

If we break this by iterations, we get the following:

1st iteration: 4 * factorial(3) // 4 * 3
2nd iteration: 3 * factorial(2) // 4 * 3 * 2
3rd iteration: 2 * factorial(1) // 4 * 3 * 2 * 1
4th iteration: 1 * factorial(0) // 4 * 3 * 2 * 1 * 1 = 24
