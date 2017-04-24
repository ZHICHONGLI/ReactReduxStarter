import React from 'react';
import { shallow } from 'enzyme';
import Busket from 'components\components\Busket.js';

describe('<Busket />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Busket />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "busket-component"', function () {
      expect(component.hasClass('busket-component')).to.equal(true);
    });
  });
});
