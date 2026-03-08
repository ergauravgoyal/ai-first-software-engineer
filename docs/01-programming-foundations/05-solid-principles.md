# SOLID Principles

SOLID is a set of five design principles intended to make software designs more understandable, flexible, and maintainable.

---

## 1. Single Responsibility Principle (SRP)

> A class or module should have one, and only one, reason to change.

### Example: User Management

Bad practice: A class that handles both User data and Email notifications.
Good practice: Separate classes for User data and Email service.

=== "JavaScript"

    ```javascript
    class User {
        constructor(name) { this.name = name; }
    }
    class EmailService {
        sendEmail(user, message) { /* logic */ }
    }
    ```

=== "Python"

    ```python
    class User:
        def __init__(self, name):
            self.name = name

    class EmailService:
        def send_email(self, user, message):
            # logic
            pass
    ```

=== "Java"

    ```java
    class User {
        private String name;
        public User(String name) { this.name = name; }
    }
    class EmailService {
        void sendEmail(User user, String message) { /* logic */ }
    }
    ```

---

## 2. Open/Closed Principle (OCP)

> Software entities should be open for extension, but closed for modification.

### Example: Discount Calculation

Instead of modifying the `Discount` class for every new type of customer, we use inheritance or polymorphism.

=== "JavaScript"

    ```javascript
    class Discount {
        apply(price) { return price; }
    }
    class VIPDiscount extends Discount {
        apply(price) { return price * 0.8; }
    }
    ```

=== "Python"

    ```python
    class Discount:
        def apply(self, price):
            return price

    class VIPDiscount(Discount):
        def apply(self, price):
            return price * 0.8
    ```

=== "Java"

    ```java
    interface Discount {
        double apply(double price);
    }
    class VIPDiscount implements Discount {
        public double apply(double price) {
            return price * 0.8;
        }
    }
    ```

---

## 3. Liskov Substitution Principle (LSP)

> Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

### Example: The Classic Bird/Ostrich Problem

If a `Bird` class has a `fly()` method, and `Ostrich` inherits from `Bird` but can't fly, it violates LSP.

=== "JavaScript"

    ```javascript
    class Bird {}
    class FlyingBird extends Bird { fly() {} }
    class Ostrich extends Bird {} // No fly() method here
    ```

=== "Python"

    ```python
    class Bird: pass
    class FlyingBird(Bird):
        def fly(self): pass
    class Ostrich(Bird): pass # Correct: Ostrich doesn't fly
    ```

=== "Java"

    ```java
    class Bird {}
    class FlyingBird extends Bird { void fly() {} }
    class Ostrich extends Bird {}
    ```

---

## 4. Interface Segregation Principle (ISP)

> No client should be forced to depend on methods it does not use.

### Example: Multi-function Printers

Instead of one huge `Machine` interface, split it into `Printer` and `Scanner`.

=== "JavaScript"

    ```javascript
    // JS doesn't have interfaces, but we simulate via composition
    const printer = { print() {} };
    const scanner = { scan() {} };
    const simplePrinter = { ...printer };
    ```

=== "Python"

    ```python
    class Printer:
        def print_doc(self): pass

    class Scanner:
        def scan_doc(self): pass

    class ModernPrinter(Printer, Scanner): pass
    ```

=== "Java"

    ```java
    interface Printer { void print(); }
    interface Scanner { void scan(); }

    class BasicPrinter implements Printer {
        public void print() {}
    }
    ```

---

## 5. Dependency Inversion Principle (DIP)

> Depend upon abstractions (interfaces) rather than concrete implementations.

### Example: Database Connection

High-level business logic shouldn't depend on a specific database like MySQL. It should depend on a `Database` interface.

=== "JavaScript"

    ```javascript
    class Logger {
        constructor(storage) { this.storage = storage; }
        log(msg) { this.storage.save(msg); }
    }
    ```

=== "Python"

    ```python
    class Logger:
        def __init__(self, storage):
            self.storage = storage
        def log(self, msg):
            self.storage.save(msg)
    ```

=== "Java"

    ```java
    interface Storage { void save(String msg); }
    class Logger {
        private Storage storage;
        Logger(Storage s) { this.storage = s; }
        void log(String m) { storage.save(m); }
    }
    ```
