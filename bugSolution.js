```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = setInterval(() => {
      console.log('Count changed:', count);
    }, 1000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(logCount);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```