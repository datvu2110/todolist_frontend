import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import Signin from './Signin'

EnzymeTestAdapter.init()

const logoShallow = shallow(<Signin></Signin>)

test("Test with div in Signin", ()=> {
    const countDiv = logoShallow.find("div")
    expect(countDiv.length).toBe(6)
})

test("Test with input email field", ()=> {
    const countDiv = logoShallow.find("[type='email']")
    expect(countDiv.length).toBe(1)
})

test("Test with input password", ()=> {
    const countDiv = logoShallow.find("[type='password']")
    expect(countDiv.length).toBe(1)
})