# Events

This folder covers event handling in JavaScript, including event listeners, event objects, and various event types.

## Files in this folder:

- **eventbasics.js** - Basic event handling concepts
- **one.html** - Event handling example 1
- **two.html** - Event handling example 2
- **three.html** - Event handling example 3

## Key Concepts Covered:

### Event Handling:
- Event listeners: `addEventListener()`
- Event types:
  - Click events
  - Mouse events (mouseover, mouseout, mousemove)
  - Keyboard events (keydown, keyup, keypress)
  - Form events (submit, change, input)
  - Focus events (focus, blur)
  - Window events (load, resize, scroll)

### Event Object:
- Event properties:
  - `event.target` - Element that triggered event
  - `event.type` - Type of event
  - `event.preventDefault()` - Prevent default behavior
  - `event.stopPropagation()` - Stop event bubbling
- Keyboard events:
  - `event.key` - Key pressed
  - `event.keyCode` - Key code (deprecated)
  - `event.code` - Physical key code

### Event Methods:
- `addEventListener(event, handler)`
- `removeEventListener(event, handler)`
- Inline event handlers (not recommended)

### Event Propagation:
- Event bubbling (default)
- Event capturing
- Event delegation

## Best Practices:

- Use `addEventListener` instead of inline handlers
- Remove event listeners when no longer needed (memory management)
- Use event delegation for dynamic content
- Prevent default behavior when necessary
- Stop propagation only when needed

