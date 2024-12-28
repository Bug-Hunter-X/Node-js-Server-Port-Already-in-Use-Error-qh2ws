# Node.js Server Port Already in Use
This repository demonstrates a common error in Node.js where a server fails to start because the port is already in use.  The solution involves ensuring the previous server instance is closed gracefully.
## Bug
The `bug.js` file contains a simple Express.js server.  If you run this file multiple times without stopping the previous instance, you'll encounter a port already in use error.
## Solution
The `bugSolution.js` file demonstrates how to handle this error by using a `server.close()` method to ensure the server shuts down gracefully before restarting.
## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Without stopping the server, run `node bug.js` again.  You'll see the error.
4. Run `node bugSolution.js`. This version should handle the issue.