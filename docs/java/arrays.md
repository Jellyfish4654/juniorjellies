# Arrays

To begin, please log in to [Replit](https://replit.com/).

## Arrays

Arrays are a fundamental data structure in Java that enable you to store multiple values of the same data type in a single variable. This provides a more efficient and organized approach to managing data than declaring separate variables for each value.

To create an array in Java, you can use the following syntax:  
`data_type[] array_name = new data_type[array_length];`

You can also initialize an array with values using the following syntax:  
`data_type[] array_name = {value1, value2, ..., valueN};`

Each element in the array is identified by its index, which starts at 0 and increments by 1 for each subsequent element. The index is used for assigning values to the array elements and accessing them.  

To determine the size of an array, you can access the length property of the array using the following syntax:  
`myArray.length`

Full Example:

```java
class Main{
    public static void main(String[] args) {
        int[] myArray = new int[10];
        myArray[0] = 5;
        // index             0  1  2  3  4
        int[] numberArray = {1, 2, 3, 4, 5};
        System.out.println(myArray[0]);
        System.out.println(numberArray[0]);
        System.out.println("Length: "+numberArray.length);
    }
}
```

::: tip Output:
5  
1  
Length: 5
:::

```java
class Main {
    public static void main(String[] args) {
        String[] textArray = { "I", "love", "Junior", "Jellies!" };

        int i = 0;
        while (i < 4) {
            System.out.println(textArray[i] + " ");
            i++;
        }
    }
}
```

::: tip Output:
I  
love  
Junior  
Jellies!  
:::