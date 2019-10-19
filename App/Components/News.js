/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'; //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking} from 'react-native';
import { material } from 'react-native-typography'; //consider using this!
import { Metrics, Colors } from '../Themes';
import ArticleItem from './ArticleItem';

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  openArticle = (url) => {
    Linking.openURL(url);
  }
  //you can change the props above to whatever you want/need.
  renderArticleItem = (item,index) => {
    return (
    <ArticleItem article = {item}
                 whenPressed = {() => this.openArticle(item.url)}>
    </ArticleItem>
    );
  }
  keyExtractor = index => {
    return index.toString();
  }

  render () {
    const {articles} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data = {articles}
          renderItem = {({ item, index }) => this.renderArticleItem(item, index)}
          keyExtractor={(item, index) => this.keyExtractor(index)}
          >
        </FlatList>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
  },
});
