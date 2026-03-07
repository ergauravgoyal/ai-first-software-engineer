# Object Oriented Programming (OOP)

## What is OOP?

Object Oriented Programming (OOP) is a way of designing software by
modeling **real-world entities as objects**.

Instead of writing only functions, we create **classes that represent
real-world concepts**.

Examples of objects in software systems:

| Real World | Software Example |
|---|---|
| Car | Car class |
| Bank Account | BankAccount class |
| Payment | PaymentService class |
| Notification | NotificationService class |

Each object contains:

- **State (data)** → attributes\
- **Behavior (actions)** → methods

---

## Core Concepts

## Class

A class is a **blueprint used to create objects**.

Example:

``` python
class Car:

    def start(self):
        print("Car started")
```

---

## Object

An object is an **instance of a class**.

``` python
car = Car()
car.start()
```

Output:

```text
Car started
```

Here:

```text
Car → blueprint
car → actual object
```

---

## The Four Pillars of OOP

OOP is built around four fundamental principles.

| Principle | Purpose |
|---|---|
| Abstraction | Hide complexity |
| Inheritance | Reuse code |
| Polymorphism | Same interface, different behavior |
| Encapsulation | Protect internal data |

---

### 1. Abstraction

Abstraction means **hiding implementation details and exposing only
essential functionality**.

Example:

``` python
from abc import ABC, abstractmethod

class PaymentService(ABC):

    @abstractmethod
    def process_payment(self, amount):
        pass
```

Implementation:

``` python
class CardPayment(PaymentService):

    def process_payment(self, amount):
        print(f"Processing card payment of {amount}")


class UPIPayment(PaymentService):

    def process_payment(self, amount):
        print(f"Processing UPI payment of {amount}")
```

Usage:

``` python
payment = UPIPayment()
payment.process_payment(500)
```

---

### 2. Inheritance

Inheritance allows a class to **reuse functionality from another
class**.

Example:

``` python
class Vehicle:

    def move(self):
        print("Vehicle is moving")
```

Child class:

``` python
class Car(Vehicle):

    def open_trunk(self):
        print("Car trunk opened")
```

Usage:

``` python
car = Car()

car.move()
car.open_trunk()
```

Output:

```text
Vehicle is moving
Car trunk opened
```

---

### 3. Polymorphism

Polymorphism means **same interface but different behavior**.

Example:

``` python
class EmailNotification:

    def send(self):
        print("Sending email")


class SlackNotification:

    def send(self):
        print("Sending slack message")
```

Usage:

``` python
notifications = [
    EmailNotification(),
    SlackNotification()
]

for n in notifications:
    n.send()
```

Output:

```text
Sending email
Sending slack message
```

---

### 4. Encapsulation

Encapsulation means **restricting direct access to internal data and
exposing controlled access through methods**.

Example:

``` python
class BankAccount:

    def __init__(self):
        self.__balance = 0

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance
```

Usage:

``` python
account = BankAccount()

account.deposit(100)

print(account.get_balance())
```

Output:

```text
100
```

---

## Practical Example

Notification System:

```text
    NotificationService
          |
      ---------------------
      |        |         |
    Email    Slack     Phone
```

This demonstrates:

- abstraction
- polymorphism
- dependency injection
- strategy pattern

---

## Practice Exercise

Implement a **Payment System**.

Abstract class:

```text
PaymentService
```

Method:

```text
process_payment(amount)
```

Implement:

- CardPayment
- UPIPayment
- WalletPayment

Example:

``` python
payment = CardPayment()
payment.process_payment(1000)
```

---

## Key Takeaways

OOP helps build software that is:

- modular
- reusable
- scalable
- maintainable

Understanding OOP is essential for:

- backend engineering
- system design
- design patterns
