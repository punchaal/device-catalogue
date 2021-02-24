# Telus Device Catalogue

A customer would like to browse all the Apple devices avaiable for purchase, create an application with a component that reads and displays devices from the local restful API on port `8081`.
The API has two routes `/watches` which returns a list of watches and `/iphones` which returns a list of iPhones.

Create two routes locally with your perferred client-side routing library: `/watches` and `/iphones`. The `/watches` routes should **ONLY** display a basic unordered list of watches and the `/iphones` route should **ONLY** display an unordered list of phones.
Each routes represents a page in the application, each page should have a heading indicating the type of devices listed on the page and grid showing all the devices in this category.



## Application Requirements

- [x] An index page with a list of all pages (i.e. A watch page and phone page).
- [x] Unit tests for **at least** one component.
- [x] [TDS](https://tds.telus.com/components/index.html) usage (A list of useful components can be found below).


## Anotomy of an API response

The mock API replies with the following structure:

```javascript
{
  "data": [
    {
      "name": "Apple Watch Series 6",
      "brand": "Apple",
      "price": 1399
    }
  ]
}
```

`npm run dev` will start the local API server on port 8080 along with a client side user interface on port 8080.


## Reference Device Card

![device card](https://github.com/akeemattelus/apple-shopper/blob/master/public/images/device-card.png)

## Useful TDS components

- [TDS Heading](https://tds.telus.com/components/index.html#/Typography?id=heading)
- [TDS Card](https://tds.telus.com/components/index.html#/Content?id=card)
- [TDS Image](https://tds.telus.com/components/index.html#/Content?id=image)
- [TDS PriceLockup](https://tds.telus.com/components/index.html#/Typography?id=pricelockup)
- [TDS Text](https://tds.telus.com/components/index.html#/Typography?id=text)

