import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';

describe('Nav', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Nav debug />);
    expect(component).toMatchSnapshot();
  });

  it('Should render a div', () => {
    const renderedComponent = shallow(<Nav />);
    expect(renderedComponent.find('div')).toHaveLength(2);
  });
});
