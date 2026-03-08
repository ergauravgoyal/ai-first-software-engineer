# Functions & Modules

Abstraction is the key to managing complexity in software. Functions and Modules are the primary tools for this.

## 1. Functions (The Black Box)

A function is a reusable block of code that performs a specific task. Think of it as a "mini-program" inside your program.

- **Inputs (Parameters)**: What the function needs to do its job.
- **Output (Return Value)**: The result the function gives back to the caller.
- **Side Effects**: Actions the function takes that affect the outside world (like printing to a screen or saving a file).

### Why use functions?
- **DRY (Don't Repeat Yourself)**: Write once, use everywhere.
- **Readability**: Give complex logic a meaningful name (e.g., `calculate_tax()`).

## 2. Modules (The Toolbox)

A module is a file containing functions, variables, and other code logic. It allows you to organize your code into logical logical units.

- **Encapsulation**: Hide internal details and only show what's necessary.
- **Namespacing**: Avoid name collisions (e.g., `math.add` vs `physics.add`).

## 3. Scope

Scope determines the visibility of variables.
- **Global**: Accessible from anywhere in the program.
- **Local**: Only accessible within the function where it was defined.
