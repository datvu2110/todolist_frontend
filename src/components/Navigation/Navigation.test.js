import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import Navigation from './Navigation'

EnzymeTestAdapter.init()

const logoShallow = shallow(<Navigation></Navigation>)

test("Test with Nav in Navigation", ()=> {
    const countDiv = logoShallow.find("nav")
    expect(countDiv.length).toBe(1)
})

test("Test with State 'show' in Navigation", ()=> {
    const countDiv = logoShallow.state()
    expect(countDiv.show).toBe(false)
})

test("Test with State 'alert' in Navigation", ()=> {
    const countDiv = logoShallow.state()
    expect(countDiv.alert).toBe(false)
})