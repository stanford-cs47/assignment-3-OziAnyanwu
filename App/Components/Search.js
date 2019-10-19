/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes';
import { AntDesign } from '@expo/vector-icons';



export default class Search extends Component {

  state = {
    text : ""
  }
  searchNews = () => {
    this.setState({text:""});
    Keyboard.dismiss();
    this.props.onSearch(this.state.text);
  }
  render () {
    return (
      <View style = {{height:40,width:'95%' ,borderRadius:5,backgroundColor: '#f0f0f0', flexDirection: 'row', alignItems: 'center', margin : 10}}>
        <TextInput style = {styles.textinput}
                   placeholder = "Search for News"
                   onChangeText = {text => {this.setState({text:text})}}
                   onSubmitEditing = {this.searchNews}
                   value = {this.state.text}>
        </TextInput>
        <TouchableOpacity style = {{flex:1,padding: 5}}
                          onPress = {this.searchNews}>
          <AntDesign
            name = "search1"
            size = {15}
            color = "red"
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textinput: {
    flex:12,
    padding:10
  }
});
