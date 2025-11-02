# Advanced JavaScript - Part 1

This folder covers advanced JavaScript concepts including Promises, async/await, and API requests.

## Files in this folder:

- **promise.js** - Promise creation and usage
- **promises.js** - Advanced Promise patterns
- **ApiRequest.html** - Making API requests using fetch and async/await

## Key Concepts Covered:

### Promises:
- Promise syntax: `new Promise((resolve, reject) => {})`
- Promise states:
  - Pending
  - Fulfilled (resolved)
  - Rejected
- Promise methods:
  - `.then()` - Handle fulfilled promise
  - `.catch()` - Handle rejected promise
  - `.finally()` - Execute regardless of outcome
  - `.all()` - Wait for all promises
  - `.race()` - First promise to settle
  - `.allSettled()` - Wait for all (success or failure)

### Async/Await:
- `async` function declaration
- `await` keyword for promise resolution
- Error handling with try/catch
- Sequential vs parallel execution

### API Requests:
- `fetch()` API
- HTTP methods (GET, POST, PUT, DELETE)
- Request options (headers, body, method)
- Response handling
- Error handling in API calls

## Important Notes:

- Promises help avoid callback hell
- `async/await` makes asynchronous code more readable
- Always handle promise rejections
- Use `fetch` for modern API requests
- Consider error handling for network failures

## Example Pattern:

```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

