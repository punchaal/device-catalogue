import React from 'react';
import PhonesPage from './PhonesPage';
import { configure, shallow, render, mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


it("renders without crashing", () => {
    shallow(<PhonesPage />);
  });
  
