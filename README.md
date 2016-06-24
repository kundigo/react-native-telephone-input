# React Native Telephone Input

[![npm version](https://badge.fury.io/js/react-native-telephone-input.svg)](https://badge.fury.io/js/react-native-telephone-input)

This library is a forked of [React Telephone Input](https://github.com/mukeshsoni/react-telephone-input).

- Basic feature for mask and country discover
- Support iOS and Android

![react-native-activity-view](React_Native_Telephone_Input_Example.gif)

## Basic Usage

You can find an [ExampleProject](./ExampleProject).

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import TelephoneInput from 'react-native-telephone-input';

class ExampleProject extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TelephoneInput placeholder="Number here, please" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ExampleProject', () => ExampleProject);
```

## Lint

- [eslint](http://eslint.org/)
- [AirBnb Javascript Styleguide](https://github.com/airbnb/javascript)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

```
npm run lint
```

## Contributing

1. Fork it ( https://github.com/kundigo/react-native-telephone-input/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
