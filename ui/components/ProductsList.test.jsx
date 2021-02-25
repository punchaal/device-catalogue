import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import ProductList from './ProductsList';

configure({adapter: new Adapter()});

describe(`ProductList Props component`, () => {
    const props = {
      items: [
        {
            "name": "iPhone 12 Pro",
            "brand": "Apple",
            "price": 1399
        },
        {
            "name": "iPhone 12",
            "brand": "Apple",
            "price": 979
        },
        {
            "name": "iPhone SE",
            "brand": "Apple",
            "price": 599
        }
    ]
        
    }
    it('renders a ProducltsList by default', () => {
        const wrapper = shallow(<ProductList  {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    
    })