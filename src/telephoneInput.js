'use strict';

import React, { Component } from 'react';

var reduce = require('lodash.reduce');
var first = require('lodash.first');
var tail = require('lodash.tail');

import countryData from './country_data';
const allCountriesObject = countryData.allCountriesObject;

import {
  AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class TelephoneInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iso_code: '',
      best_choice: '',
      index: 0,
    };
  }

  formatNumber(text, pattern) {

        if(!text || text.length === 0) {
            return '+';
        }

        // for all strings with length less than 3, just return it (1, 2 etc.)
        // also return the same text if the selected country has no fixed format
        if((text && text.length < 2) || !pattern || !this.props.autoFormat) {
            return `+${text}`;
        }

        var formattedObject = reduce(pattern, function(acc, character) {
            if(acc.remainingText.length === 0) {
                return acc;
            }

            if(character !== '.') {
                return {
                    formattedText: acc.formattedText + character,
                    remainingText: acc.remainingText
                };
            }

            return {
                formattedText: acc.formattedText + first(acc.remainingText),
                remainingText: tail(acc.remainingText)
            };
        }, {formattedText: '', remainingText: text.split('')});
        return formattedObject.formattedText + formattedObject.remainingText.join('');
  }

  guessSelectedCountry(phoneNumber){

    for(var i = 0; i < allCountriesObject.length; i++){
      if(allCountriesObject[i].dialCode == phoneNumber){
        let iso_code = allCountriesObject[i].iso2.toUpperCase()
        this.setState({ best_choice: iso_code, index: i });
        return;
      }else{

        if(phoneNumber.length < 4){
          this.setState({ iso_code: '', formattedNumber: phoneNumber});
        }else{
          let formattedNumber = this.formatNumber(phoneNumber.replace(/\D/g, ''), allCountriesObject[this.state.index].format);
          this.setState({ iso_code: this.state.best_choice, formattedNumber: formattedNumber });
        }

      }
    }
  }

  getCountryName(phoneNumber){
    return this.guessSelectedCountry(phoneNumber);
  }

  render() {
    var { style, input_style } = this.props;

    return (
      <View style={{flexDirection:'row', height: 40}}>
        <Text style={{flex: 1, fontSize: 20, marginTop: 7}} >{ this.state.iso_code }</Text>
        <TextInput style={{flex: 8, fontSize: 20}}
          value={this.state.formattedNumber}
          onChange={(event) => this.getCountryName(event.nativeEvent.text)}
          {...this.props}
        />
      </View>
    );
  }
}

TelephoneInput.defaultProps = {
 autoFormat: true,
};
