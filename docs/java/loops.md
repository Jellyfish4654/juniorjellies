# Loops

To begin, please log in to [Replit](https://replit.com/).

## While Loops

A `while` loop repeatedly executes a set of statements until a given condition becomes `false`.

```java
while (condition) {
    // body, continues to be executed until condition false
}
```

```java
int i = 0;
while (i <= 10) {
  System.out.println(i);
  i++;
}
```

::: details Output:
0  
1  
2  
3  
4  
5  
6  
7  
8  
9  
10
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/while.PNG" style="width:50%;height:50%;"> 

## Break Statement

A `break` statement causes the program to exit the while loop early.

```java
break;
```

```java
int i = 0;
while (i < 10) {
  System.out.println(i);
  i++;
  if (i == 4) {
    break;
  }
}
```

::: tip Output:
0  
1  
2  
3  
4
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/break.PNG" style="width:50%;height:50%;"> 

## Continue Statement

A `continue` statement causes the computer to jump to the beginning of the while loop.

```java
break;
```

```java
int i = 0;
while (i < 6) {
  if (i == 2) {
    i++;
    continue;
  }
  System.out.println(i);
  i++;
}
```

::: tip Output:
0  
1  
3  
4  
5
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/continue.PNG" style="width:50%;height:50%;"> 