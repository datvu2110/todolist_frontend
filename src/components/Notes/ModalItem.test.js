import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import ModalItem from './ModalItem';

EnzymeTestAdapter.init()

const logoShallow = shallow(<ModalItem></ModalItem>)

test("Test with Modal in ModalItem", ()=> {
    const countDiv = logoShallow.find("Modal")
    expect(countDiv.length).toBe(1)
})

test("Test with Modal Header in ModalItem", ()=> {
    const countDiv = logoShallow.find("Modal.Header")
    expect(countDiv.length).toBe(0)
})

test("Test with Button in ModalItem", ()=> {
    const countDiv = logoShallow.find("Button")
    expect(countDiv.length).toBe(2)
})