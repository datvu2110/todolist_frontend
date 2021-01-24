import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import Logo from './Logo'

EnzymeTestAdapter.init()

const logoShallow = shallow(<Logo></Logo>);

test("Test with div", ()=> {
    const countDiv = logoShallow.find("div")
    expect(countDiv.length).toBe(2)
})

test("Test with Tilt", ()=> {
    const countDiv = logoShallow.find("Tilt")
    expect(countDiv.length).toBe(1)
})

test("Test with State", ()=> {
    const countDiv = logoShallow.state()
    expect(countDiv.test).toBe("abc")
  
})

test("Test with alt", ()=> {
    const countDiv = logoShallow.find("[alt='logo']")
    expect(countDiv.length).toBe(1)
})

test("Test with input fields", ()=> {
    const countDiv = logoShallow.find("[type='text']")
    expect(countDiv.length).toBe(3)
})

test("Test with input fields", ()=> {
    const countDiv = logoShallow.find("[type='radio']")
    expect(countDiv.length).toBe(1)
})

test("test with <p>", ()=> {
    const countDiv = logoShallow.find("[id='abc']")
    expect(countDiv.text()).toBe("Text")
})


