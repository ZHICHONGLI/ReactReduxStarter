import React from 'react';
import { shallow } from 'enzyme';
import ListItem from 'components\ListItem.js';

describe('<ListItem />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ListItem />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "listitem-component"', function () {
      expect(component.hasClass('listitem-component')).to.equal(true);
    });
  });
});
