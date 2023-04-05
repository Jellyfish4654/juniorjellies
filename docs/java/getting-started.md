# Setting Up

Please go to [Replit](https://replit.com/) and create an account. Create a Repl and select Java as the template.

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/createTemplate.png" style="width:90%;height:90%;"> 

## Print Statements

`public static void main(String[] args){}` is known as the main method. This is a special method that runs in the system.  
To print a statement:

```java
class Main{
	public static void main(String[] args){
		System.out.println("Junior Jellies Java!");
	}
}
```

:::tip Note
You need to end statements with ';' to complete the statement;  
Try it yourself!
:::

## Comments

Use `//` for single line comments:

```java
//Comment
```

Use `/*` and end with `*/` for a block comment:

```java
/* Block comments
allow you to
comment multiple lines */
```

## Primitive Data Types

| Type  |  What it does |  Examples |
|---|---|---|
| String |  Stores text |  "Hello", "Jellies", "E" |
| int |  Stores whole numbers |  1, 100, 7 |
| double |  Stores fractional numbers |  1.5, 135.21, 1.0 |

:::tip Fun Fact:
There are additional primitive data types, not stated here. They are used to optimize memory use, however, doubles and integers are generally used for calculations.
:::

## Variables

`Variables` are containers for storing data types.

*Syntax Convention:*
Variable names should be camelCase
- Capitalize each word except for the first word
- Data type variableName = value;
- Ex. `theseAreExamples`, `iPhone`, `juniorJelliesJava`

When naming variables, it's recommended to use descriptive names that are easy to read and understand. However, it's important to strike a balance and avoid making names excessively long or complex, which could make them difficult to type and slow down the coding process.
The only exception to this convention is for loop counter variables such as `i`, `j`, `k`, etc.

## Type Casting

Type casting is when you assign a value of one primitive data type to another type.  Casting is done by placing the type in parentheses in front of the value.

```java
public class Main {
  public static void main(String[] args) {
    double double1 = 9.32;
    int int1 = (int) double1; // Manual casting: double to int
	double double2 = (double) int1;
    System.out.println(double1);   // Outputs 9.32
    System.out.println(myInt);      // Outputs 9
	System.out.println(double2);   // Outputs 9.0
  }
}
```

## String Concatenation

Use the `+` Operator to join multiple strings or variables together

```java
public class Main {
  public static void main(String[] args) {
    String message = “Hello, welcome to”;
    System.out.println(message + “ Junior Jellies!”);
  }
}
```

::: details Output:
Hello, welcome to Junior Jellies!
:::

## Input

The Scanner class is used to get user input. We need to import the Scanner class to use it.

```java
import java.util.Scanner;
```

To create a Scanner object, we use the following expression:

```java
new Scanner(System.in)
```

**Input Types**

| Method  |  What it does |
|---|---|
| nextLine() |  Reads a String value from the user |
| nextInt() |  Reads an int value from the user |
| nextDouble |  Reads a double value from the user |

```java
import java.util.Scanner;  // Import the Scanner class

class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);  // Create a Scanner object
    System.out.println("Enter an integer");
    int input = in.nextInt();  // Read user input
    System.out.println("The user inputed "+input);  // Output user input
  }
}
```

## Arithmetic Operators

Arithmetic operators are used to perform common mathematical operations.

| Operator  |  Name  |  What it does |  Examples |
|---|---|---|---|
| + |  Addition  |  Add together two values  |  x + y |
| - |  Subtraction |  Subtracts one value from another  |  x - y  |
| * |  Multiplication |  Multiplies two values  |  x * y |
| / |  Division |  Divides one value by another  |  x / y |
| % |  Modulus |  Returns the division remainder  |  x % y |
| ++ |  Increment |  Increases the value of a variable by 1  |  x++ |
| -- |  Decrement |  Decreases the value of a variable by 1 |  x\-\- |