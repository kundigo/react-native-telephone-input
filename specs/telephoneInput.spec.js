import React, { View, Text, TextInput, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import TelephoneInput from '../src/telephoneInput';
import { expect } from 'chai';

describe('TelephoneInput', () => {
  it('renders component tags', () => {
    const wrapper = shallow(<TelephoneInput />);

    // Fixme: test component value
    // let input = wrapper.find(TextInput);
    //
    // input.simulate('change',{ nativeEvent:{ text: "333333333" }} )
    // console.log("value", input)

    expect(wrapper.length).to.equal(1);
    expect(wrapper.find(Text)).to.have.length(1);
    expect(wrapper.find(TextInput)).to.have.length(1);
  });
});
