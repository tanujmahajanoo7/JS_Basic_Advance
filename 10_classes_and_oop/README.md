# Classes and Object-Oriented Programming

This folder covers Object-Oriented Programming (OOP) concepts in JavaScript including classes, prototypes, inheritance, and advanced object features.

## Files in this folder:

- **oop.js** - Basic OOP concepts with constructor functions
- **myClasses.js** - ES6 class syntax
- **inheritance.js** - Class inheritance and extends keyword
- **Prototype.js** - Prototype chain and prototype manipulation
- **call.js** - `call()` method for function context
- **bind.html** - `bind()` method for function binding
- **getter_setter.js** - Getter and setter methods
- **object_get_set.js** - Object property descriptors
- **properties_get_set.js** - Advanced property handling
- **staticprop.js** - Static properties and methods
- **Object.js** - Object methods and utilities
- **mathpi.js** - Math object examples
- **notes.md** - Additional OOP notes

## Key Concepts Covered:

### Classes (ES6):
- Class declaration: `class ClassName { }`
- Constructor method
- Instance methods
- Static methods and properties
- Class inheritance with `extends`
- `super` keyword

### Constructor Functions (Traditional):
- Function constructors
- `new` keyword
- `this` binding in constructors

### Prototypes:
- Prototype chain
- `prototype` property
- `__proto__` property
- Method sharing via prototype

### Context and Binding:
- `call()` - Invoke function with specific `this`
- `apply()` - Similar to call but with array arguments
- `bind()` - Create new function with bound `this`

### Object Properties:
- Getter methods (`get`)
- Setter methods (`set`)
- Property descriptors
- `Object.defineProperty()`
- `Object.getOwnPropertyDescriptor()`

### Object Methods:
- `Object.create()`
- `Object.assign()`
- `Object.keys()`, `Object.values()`, `Object.entries()`
- `Object.freeze()`, `Object.seal()`

## Important Notes:

- Classes are syntactic sugar over constructor functions
- Prototypes enable method sharing and inheritance
- `this` context depends on how function is called
- Getters/setters provide controlled property access
- Static methods belong to class, not instances

