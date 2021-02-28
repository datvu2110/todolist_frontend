import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import Note from './Note';

EnzymeTestAdapter.init()

const props = {
    info: {
        name: "Dat"
    }
}

const logoShallow = shallow(<Note {...props}></Note>)



describe('Note', () => {
    it('Count the h4', () => {
      const countDiv = logoShallow.find("h4")
      expect(countDiv.length).toBe(1)
    });

    it('Count the div', () => {
        const countDiv = logoShallow.find("div")
        expect(countDiv.length).toBe(1)
    });

    it('Count the header', () => {
        const countDiv = logoShallow.find("header")
        expect(countDiv.length).toBe(1)
    });

      
})
  