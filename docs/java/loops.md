# Loops

## While Loops
A `while` loop repeatedly executes a set of statements until a given condition becomes `false`.

```java
int i = 0;
while (i <= 10) {
  System.out.println(i);
  i++;
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/while.PNG" style="width:20%;height:20%;"> 

## Break Statement

A `break` statement causes the program to exit the while loop early.

```java
int i = 0;
while (i < 10) {
  System.out.println(i);
  i++;
  if (i == 7) {
    break;
  }
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/break.PNG" style="width:20%;height:20%;"> 

## Continue Statement

```java
int i = 0;
while (i < 10) {
  if (i == 7) {
    i++;
    continue;
  }
  System.out.println(i);
  i++;
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/continue.PNG" style="width:20%;height:20%;"> 