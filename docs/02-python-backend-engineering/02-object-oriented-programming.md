# Object Oriented Programming (OOP)

## What is OOP?

Object Oriented Programming (OOP) is a way of designing software by
modeling **real-world entities as objects**.

Instead of writing only functions, we create **classes that represent
real-world concepts**.

Examples of objects in software systems:

| Real World | Software Example |
| --- | --- |
| Car | Car class |
| Bank Account | BankAccount class |
| Payment | PaymentService class |
| Notification | NotificationService class |

Each object contains:

- **State (data)** → attributes\
- **Behavior (actions)** → methods

---


### Why OOP Matters in Backend Systems
In backend architecture, OOP is crucial for:

1. **Modularity:** Breaking down massive applications (like a billing system or inventory manager) into small, manageable class files.
2. **State Management:** Backend systems constantly manage state (e.g., active Database Connections, authenticated User Sessions). Objects encapsulate this state safely.
3. **Standardized APIs:** Creating interfaces (like standard `PaymentGateway` classes) allows different developers to build plugins or extensions without breaking the core system.

### Mapping Real-World Problems to Objects
When designing a backend, use **Domain-Driven Design** heuristics to map the business problem to code:

- **Nouns** become **Classes** (e.g., *Customer*, *Invoice*)
- **Adjectives** become **Attributes / State** (e.g., *is_active*, *balance*)
- **Verbs** become **Methods / Behavior** (e.g., *pay_bill()*, *cancel_subscription()*)

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
| --- | --- |
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

**Access Control in Python:**
Unlike Java or C++, Python does not have strict compiler-enforced `private` or `protected` keywords. Instead, it relies on naming conventions:
- **Public:** `balance` (Accessible anywhere)
- **Protected:** `_balance` (Convention indicating "internal use only", usually for subclasses)
- **Private:** `__balance` (Triggers *Name Mangling* to prevent accidental access from outside the class)


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

---

## Composition vs. Inheritance

### The Trade-offs of Inheritance
While inheritance (a **"is-a"** relationship) is great for code reuse, deep inheritance trees become a nightmare in backend systems:
- **Brittle Code:** Changing a base class can unexpectedly break dozens of child classes (the *Fragile Base Class* problem).
- **Tight Coupling:** Child classes are permanently bound to the implementation details of their parents.

### Composition as a Default Choice
Modern software engineering favors **Composition over Inheritance**. 
Instead of a class *being* a type of another class, a class *contains* (or **"has-a"**) instances of other classes to get its behavior.

**Example of Composition:**
Instead of a `Car` inheriting from an `Engine` class (which makes no logical sense anyway), the `Car` *has an* `Engine`.

```python
class Engine:
    def start(self):
        print("Engine roaring")

class Car:
    def __init__(self):
        # Composition: The Car owns an Engine object
        self.engine = Engine()
        
    def start(self):
        self.engine.start()
```
By defaulting to Composition, your backend services remain loosely coupled, making it incredibly easy to swap out components (like changing a `MySQLDatabase` to a `PostgresDatabase`) without rewriting the entire application hierarchy.

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

## In-Depth Examples

### 1. Engine & Car System (Dependency Injection & Polymorphism)

This example demonstrates how to build an extensible vehicle system. The `Car` class doesn't need to know *how* the engine works, just how to interact with it through the abstract `Engine` interface.

```python
from abc import ABC, abstractmethod

class Engine(ABC):
    @abstractmethod
    def move_forward(self):
         pass
     
    @abstractmethod
    def stop(self):
         pass
     
class PetrolEngine(Engine):
    def move_forward(self):
        print("Petrol Engine is moving forward")
        
    def stop(self):
        print("Petrol Engine is stopped")            

class DieselEngine(Engine):
    def move_forward(self):
        print("Diesel Engine is moving forward")
        
    def stop(self):
        print("Diesel Engine is stopped")            
      
class ElectricEngine(Engine):
    def move_forward(self):
        print("Electric Engine is moving forward")
        
    def stop(self):
        print("Electric Engine is stopped")            

class Car:
    # Dependency Injection: The specific engine is injected when creating the Car
    def __init__(self, engine: Engine):
        self.engine = engine
    
    def accelerate(self):
        self.engine.move_forward()
        
    def apply_break(self):
       print("Stopping")
       print("="*80)
       print("Stopped")
       self.engine.stop()
       print('\\n')

# Usage: We can swap engines without changing the Car class!
car1 = Car(PetrolEngine())
car1.accelerate()
car1.apply_break()

car2 = Car(DieselEngine())
car2.accelerate()
car2.apply_break()

car3 = Car(ElectricEngine())
car3.accelerate()
car3.apply_break()
```

### 2. Notification Service (Strategy Pattern)

This demonstrates the Strategy pattern, where the method of notification is interchangeable dynamically.

```python
from abc import ABC, abstractmethod

class NotificationService(ABC):
    @abstractmethod
    def send_notification(self, title: str, body: str):
        pass
    
class EmailNotificationService(NotificationService):
    def send_notification(self, title: str, body: str):
       print(f"Sending EMAIL notification with Title: {title} and body: {body}")
        
class SlackNotificationService(NotificationService):
     def send_notification(self, title: str, body: str):
       print(f"Sending SLACK notification with Title: {title} and body: {body}")
            
class PhoneMessageNotificationService(NotificationService):
     def send_notification(self, title: str, body: str):
        print(f"Sending PHONE notification with Title: {title} and body: {body}")

class TriggerNotification:
    def __init__(self, notification: NotificationService):
        self.notification = notification
      
    def trigger_notification(self, title, body):
        print("\\nNotification Triggered")
        self.notification.send_notification(title, body)

# Usage
trigger = TriggerNotification(EmailNotificationService())
trigger.trigger_notification("Server Down", "The production server is down")   
```

### 3. Payment Processor (Refactoring Bad Code to Strategy Pattern)

**Bad Way (Hardcoded if/else statements):**

```python
class PaymentProcessorBad:
    def process_payment(self, payment_mode):
        if payment_mode == "CARD":
            self.__process_card()
        elif payment_mode == "UPI":
            self.__process_upi()  
            
    def __process_card(self):
        print("Card payment")   
    
    def __process_upi(self):
        print("UPI payment")  
```
*Why it's bad:* Every time you add a new payment method, you have to modify the `PaymentProcessorBad` class, which violates the Open-Closed Principle.

**Good Way (Abstraction / Strategy Pattern):**

```python
from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def process_payment(self): # public abstract void processPayment();
        pass
    
class CardPayment(Payment):
    def process_payment(self):
        print("Card Payment")    

class UpiPayment(Payment):
    def process_payment(self):
        print("Upi Payment")
        
class BankTransferPayment(Payment):
    def process_payment(self):
        print("Bank Transfer Payment")
        
class WalletTransferPayment(Payment):
    def process_payment(self):
        print("Wallet transfer Payment")        

class PaymentProcessor:
    ## Expects an object of the Payment class (or any descendant of Payment class)
    def process_payment(self, payment: Payment):
        payment.process_payment()

# Usage
payment_processor = PaymentProcessor()

payment_processor.process_payment(CardPayment())
payment_processor.process_payment(UpiPayment())
payment_processor.process_payment(BankTransferPayment())
payment_processor.process_payment(WalletTransferPayment())
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
