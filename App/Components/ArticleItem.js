import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import { material } from 'react-native-typography';

export default function ArticleItem(props) {
  return (
    <TouchableOpacity onPress = {props.whenPressed}>
      <View style = {{margin: 10}}>
        <Text style = {material.title}>{props.article.title}</Text>
        <Text style = {material.caption}>{props.article.snippet}</Text>
        <Text style = {material.body2}>{props.article.byline}</Text>
        <Text style = {material.body2}>{props.article.date}</Text>
      </View>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
  }
});
