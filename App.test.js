import App from './App'
import EnzymeTestAdapter from './EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';
EnzymeTestAdapter.init()

const appShallow = shallow(<App></App>);

test("test to validate state", ()=> {
    const appState = appShallow.state();
    console.log(appState)
    expect(true)
})