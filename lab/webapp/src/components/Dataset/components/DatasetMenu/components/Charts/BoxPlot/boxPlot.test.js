import BoxPlot from './';
// try getting react pieces and framework for test rendering
import React from 'react';
import Papa from 'papaparse';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const initialState = {};
const mockStore = configureStore(middlewares);

import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
// trying to use jest & plotly needs a stub function/special configuration (in package.json)
// https://github.com/plotly/react-plotly.js/issues/115
//window.URL.createObjectURL = function() {};
configure({ adapter: new Adapter() });

describe('basic testing of boxplot react component', () => {
  let store = mockStore(initialState);
  let testBoxPlot;

  beforeEach(() => {
    testBoxPlot = mount(<BoxPlot store={store} testProp='hello' valByRowObj={{'test':[1,2]}} rawKey='test'/>);
  })
  afterEach(() => {
    testBoxPlot.unmount();
  })

  // test for existence
  it('create mock BoxPlot component, test for existence', () => {
    testBoxPlot.setProps({ name: 'bar' });
    expect(testBoxPlot.name()).toEqual('Connect(BoxPlot)');
    expect(testBoxPlot.props().testProp).toEqual('hello');
    expect(testBoxPlot.props().name).toEqual('bar');
    expect(testBoxPlot.props().valByRowObj).toEqual({'test':[1,2]});
  })

  // it('template test', () => {
  //   console.log('testBoxPlot : ', testBoxPlot);
  //   console.log('testBoxPlot plots : ', testBoxPlot.props());
  //   expect(true).toEqual(true);
  // })

})