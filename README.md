# Apple Shopper

## Task

A customer would like to browse all the Apple devices avaiable for purchase, create an application with a component that reads and displays devices from the local restful API on port `8081`.
The API has two routes `/watches` which returns a list of watches and `/iphones` which returns a list of iPhones.

Create two routes locally with your perferred client-side routing library: `/watches` and `/iphones`. The `/watches` routes should *ONLY* display a basic unordered list of watches and the `/iphones` route should *ONLY* display an unordered list of phones.
Each routes represents a page in the application, each page should have a heading indicating the type of devices listed on the page and the unordered list of devices.

The application should also include an index page which lists all assessible pages.

### Example API response from `/watches`

```
{
  "data": [
    {
      "name": "Apple Watch Series 3" 
    }
  ]
}
```

`npm run dev` will start the local API server on port 8080 along with a client side user interface on port 8080.


Write a test for at least one of the components used to display a device list with your preferred testing library. 


## Reference Device Card

![device card](https://github.com/akeemattelus/apple-shopper/blob/master/public/images/device-card.png)

