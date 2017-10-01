import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
