import React from 'react';
import Geolocation from './Geolocation';

import renderer from 'react-test-renderer';

// beforeEach(() => {
  // let component = renderer.create(<Geolocation />);
  let component = shallow(<Geolocation />);
// });

it('renders the Geolocation component', () => {
  const snapshot = renderer.create(<Geolocation />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

it.only('renders text', () => {
  const text = component.find('Text').children().text();
  expect(text).toMatch(/Current/);
});

// it('has permission to access location', () => {
//   expect(errorMessage).toBeNull();
// });

// it('gets latitude and longitude coordinates', () => {
//   const getLocation = jest.fn();
//   expect(getLocation.mock.instances.lat).not.toBe(0);
//   // expect(lng).not.toBe(0);
// });
