import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import Logo from './Logo'

EnzymeTestAdapter.init()

const logoShallow = shallow(<Logo></Logo>);



test("Test with Tilt", ()=> {
    const countDiv = logoShallow.find("Tilt")
    expect(countDiv.length).toBe(1)
})



