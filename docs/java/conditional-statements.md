# Conditional Statements 

## Boolean
A `boolean` is a data type that has two possible values: `true` and `false`.

**Boolean Operators**

| Operator | Name | Examples |
|---|---|---|
| && | Logical and | x < y && x < z |
| || | Logical or | x < y \|\| x < z |
| ! | Logical not | !(x < y && x < z) |
| == | Equal to | x == y |
| != | Not equal | x != y |
| > | Greater than | x > y |
| < | Less than | x < y |
| >= | Greater than or equal to | x >= y |
| < | Less than or equal to | x <= y |

## The if Statement
An `if` statement executes its body, if a given boolean expression, called the condition, is `true`.

```java
if (condition) {
    // body
}
// next statement
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/if-statement.PNG" style="width:90%;height:90%;"> 

## The else Statement
An `else` statement is executed if the condition of the associated if statement is `false`.

```java
if (condition) {
	// if body
} else {
	// else body
}
// next statement
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/else-statement.PNG" style="width:90%;height:90%;"> 

## The else if Statement
The body of an `else if` clause is executed if the condition of the associated `if` statement is `false` and the condition of the `else if` clause is `true`.

```java
if (condition1) {
	// if body, executed if condition1 false
} else if (condition2) {
	// else if body, executed if condition1 false and condition2 true
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/else-if-statement.PNG" style="width:90%;height:90%;"> 

`else if` clauses can be chained. At the end of the chain, an optional `else` clause can be present.

```java
if (condition1) {
	// executed if condition1 is true
} else if (condition2) {
	// executed if condition1 is false and condition2 is true
} else if (condition3) {
	// executed if condition1 and condition2 are false and condition3 is true
} else {
	// executed if condition1, condition2, and condition3 are false
}
```
