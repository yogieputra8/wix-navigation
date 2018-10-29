import React, {Component} from 'react';
import {StyleSheet, Text, Platform, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';


registerScreens();

const tabs = [{
  label: 'Navigation',
  screen: 'example.App',
  icon: require('./transform.png'),
  title: 'Navigation Types',
}];

if (Platform.OS === 'android') {
  tabs.push({
    label: 'Transition',
    screen: 'example.App',
    icon: require('./transform.png'),
    title: 'No Way!',
  });
}

// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  // drawer: {
  //   left: {
  //     screen: 'example.Types.Drawer'
  //   }
  // }
});
