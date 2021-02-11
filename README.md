# Apple Shopper

## Task

Create an application with a component that reads and displays devices from the local restful API on port `8081`.

The API has two routes `/watches` which returns a list of watches and `/iphones` which returns a list of iPhones.

Create two routes locally with your perferred client-side routing library: `/watches` and `/iphones`. The `/watches` routes should ONLY display a basic unordered list of watches and the `/iphones` route should ONLY display an unordered list of phones.

### Example API response

```
[
  {
    "name": "Apple Watch Series 3" 
  }
]
```

`npm run dev` will start the local API server on port 8080 along with a client side user interface on port 8080
