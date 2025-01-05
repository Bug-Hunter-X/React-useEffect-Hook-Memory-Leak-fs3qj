# React useEffect Hook Memory Leak

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function (return statement) when performing side effects.  This can lead to memory leaks and unexpected behavior.

The `bug.js` file showcases the problematic code. The `bugSolution.js` provides a corrected version with a cleanup function.

## Issue:

The `useEffect` hook in `bug.js` logs the current count every time it changes.  Without a return statement, this effect persists even when the component unmounts. This means that the event listener continues to fire even after the component is gone from the DOM.