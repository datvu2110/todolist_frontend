import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import SearchBox from './SearchBox';

EnzymeTestAdapter.init()

const logoShallow = shallow(<SearchBox></SearchBox>)

test("Test with div in SearchBox", ()=> {
    const countDiv = logoShallow.find("div")
    expect(countDiv.length).toBe(1)
})

test("Test with input in SearchBox", ()=> {
    const countDiv = logoShallow.find("input")
    expect(countDiv.length).toBe(1)
})

test("Test with input fields in SearchBox", ()=> {
    const countDiv = logoShallow.find("[type='search']")
    expect(countDiv.length).toBe(1)
})