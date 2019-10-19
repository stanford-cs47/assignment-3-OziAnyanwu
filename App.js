/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet,
         Text, View, SafeAreaView, StatusBar, Platform, Dimensions, Image,
         TextInput, TouchableOpacity, FlatList, ActivityIndicator, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Images, Colors } from './App/Themes';
import APIRequest from './App/Config/APIRequest';
import News from './App/Components/News';
import Search from './App/Components/Search';


const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}

var { height, width } = Dimensions.get('window');
var statusBarHeight = StatusBar.currentHeight;
export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  addTodoTimed = () => {
    this.setState({articles: this.state.articles});
  }

  componentDidMount() {
    //uncomment this to run an API query!
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  onSearch = (search) => {
    this.loadArticles(search)
    this.setState({searchText:search});
  }
  getArticleContent = () => {
    const {articles, loading} = this.state;
    let contentDisplayed = null;
    if(loading){
      contentDisplayed = <ActivityIndicator size = "large" color ="black"></ActivityIndicator>;
    } else {
      contentDisplayed = <News articles = {this.state.articles}></News>;
    }
    return (<View style = {{flex:1, width:'95%',flexDirection:'column',alignItems:'center',justifyContent: 'center'}}>
              {contentDisplayed}
            </View>);
  }

  render() {
    return (
      <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        {/*NYT LOGO*/}

        <Image
          style = {{height:width*0.2, width:width,
                    marginTop: Platform.OS === 'android' ? statusBarHeight : 0}}
          source = {require("./App/Images/nyt.png")}
          resizeMode = 'contain'
        />

        {/*Search Bar*/}
        <Search onSearch = {this.onSearch}/>

        {/*Article List*/}
        {this.getArticleContent()}
      </SafeAreaView>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

});
