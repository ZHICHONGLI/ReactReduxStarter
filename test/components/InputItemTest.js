import React from 'react';
import { shallow } from 'enzyme';
import InputItem from 'components\InputItem.js';

describe('<InputItem />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<InputItem />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "inputitem-component"', function () {
      expect(component.hasClass('inputitem-component')).to.equal(true);
    });
  });
});
