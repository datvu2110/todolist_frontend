import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import Register from './Register'

EnzymeTestAdapter.init()

const logoShallow = shallow(<Register></Register>)

test("Test with div in Signin", ()=> {
    const countDiv = logoShallow.find("div")
    expect(countDiv.length).toBe(6)
})

test("Test with input email field in Register", ()=> {
    const countDiv = logoShallow.find("[type='email']")
    expect(countDiv.length).toBe(1)
})

test("Test with input password in Register", ()=> {
    const countDiv = logoShallow.find("[type='password']")
    expect(countDiv.length).toBe(1)
})

test("Test with State in Register", ()=> {
    const countDiv = logoShallow.state()
    expect(countDiv.visible).toBe(false)
  
})