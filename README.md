```js
fetch('http://localhost:3005/log', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Hello, server!', timestamp: new Date().toISOString(), level: 'info' }),
})
  .then(res => res.text())
  .then(console.log)
  .catch(console.error);
```

http://54.251.229.80:8080/login?token=d3cd56e3898667f4431fbb740a4e63ef