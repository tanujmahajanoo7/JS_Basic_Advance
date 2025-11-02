# DOM Manipulation

This folder contains examples of working with the Document Object Model (DOM) in JavaScript.

## Files in this folder:

- **one.html** - Basic DOM structure and element selection
- **one.js** - JavaScript for DOM manipulation example 1
- **two.html** - DOM manipulation example 2
- **three.html** - DOM manipulation example 3
- **four.html** - DOM manipulation example 4

## Key Concepts Covered:

### DOM Selection Methods:
- `document.getElementById()` - Select by ID
- `document.getElementsByClassName()` - Select by class
- `document.getElementsByTagName()` - Select by tag
- `document.querySelector()` - CSS selector (first match)
- `document.querySelectorAll()` - CSS selector (all matches)

### DOM Manipulation:
- Accessing element properties
- Modifying text content
- Modifying innerHTML
- Styling elements
- Adding/removing classes
- Creating new elements
- Appending elements

### Common Operations:
- Reading element values
- Setting element values
- Traversing the DOM tree
- Parent, child, sibling relationships

## Best Practices:

- Cache DOM selections when reused
- Use `querySelector` for modern CSS selector support
- Be careful with `innerHTML` vs `textContent` (security)
- Use event delegation for dynamic content
- Minimize DOM queries - store references

