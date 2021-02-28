import React from 'react'
import EnzymeTestAdapter from '../../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';

import ListItem from './ListItem';

EnzymeTestAdapter.init()

const props = {
    items: [
        {todo: "sfdffsfs", noteid: 99, id: 142, done: 0},
        {todo: "change ", noteid: 103, id: 142, done: 0},
        {todo: "vu quoc dat", noteid: 98, id: 142, done: 0},
        {todo: "new", noteid: 101, id: 142, done: 0}
    ]
}

const logoShallow = shallow(<ListItem {...props}></ListItem>)



describe('Note', () => {

    

    it('Count the div', () => {
        const countDiv = logoShallow.find("div")
        expect(countDiv.length).toBe(13)
    });

    it('Count the button', () => {
        const countDiv = logoShallow.find("div")
        expect(countDiv.length).toBe(13)
    });

    test("Test with State in ListItem", ()=> {
        const countDiv = logoShallow.state()
        expect(countDiv.alert).toBe(false)
      
    })

      
})
  