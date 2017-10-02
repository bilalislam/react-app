import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('it updates props correctly', () => {
    const component = mount(<App />);
    const button = component.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(component.state().counter).toEqual(3);
  });
});



