import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import ModalPassword from './ModalPassword'

EnzymeTestAdapter.init()

const logoShallow = shallow(<ModalPassword></ModalPassword>)

test("Test with Modal in ModalPassword", ()=> {
    const countDiv = logoShallow.find("Modal")
    expect(countDiv.length).toBe(1)
})

test("Test with Modal Header in ModalPassword", ()=> {
    const countDiv = logoShallow.find("Modal.Header")
    expect(countDiv.length).toBe(0)
})