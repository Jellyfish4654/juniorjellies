# Loops

## While Loops
A `while` loop repeatedly executes a set of statements until a given condition becomes `false`.

```java
while (condition) {
    // body, continues to be executed until condition false
}
```

<div class="mermaid">
graph TD
condition{condition} --> |true| body
condition --> |false| next("next statement")
body --> condition
</div>

```java
public class Main {
  public static void main(String[] args) {
    int i = 0;
    while (i <= 10) {
      System.out.println(i);
      i++;
    }  
  }
}
```

## Break Statement

```java
break;
```

<div class="mermaid">
graph TD
condition{condition} --> |true| body
condition --> |false| next
body --> condition
body --> |break| next("next statement")
</div>

## Continue Statement

```java
continue;
```

<div class="mermaid">
graph TD
condition{condition} --> |true| body
condition --> |false| next
body --> condition
body --> |break| next("next statement")
body --> |continue| condition
</div>
