import React, { Component } from 'react';
// import CheckBox from 'react-native-check-box';
// import Hamburger from 'react-native-hamburger';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput
} from 'react-native';
import {Font} from 'expo';

// export default Hamburger;
export default class Note extends Component {

  // state = {
  //     fontLoaded: false,
  // };
  //
  // async componentDidMount() {
  //     await Font.loadAsync({
  //         'montserrat': require('./assets/fonts/Montserrat-Bold.ttf'),
  //     });
  //
  //     this.setState({ fontLoaded: true });
  // }

  constructor(props) {
    super(props);
    this.state = {
      //textColor: 'red',
    };
  }

  complete() {
    this.setState({
      backgroundColor: 'purple',
      //textColor: 'green',
      textDecorationLine: 'line-through',
    })

  };

  render() {

    return (

        <View key={this.props.keyval} style={styles.note}>

          <TouchableOpacity onPress={ () => this.complete() }  style={{ height: 30, flexDirection: 'row' }}>
            <View style={[styles.checkboxEmpty , {backgroundColor:this.state.backgroundColor}]} />

            {/*<TouchableOpacity onPress={ () => this.changeStyle() } style={{ height: 30, flexDirection: 'row' }}>*/}
            <TextInput style={[styles.noteText, {color:this.state.textColor}, {textDecorationLine: this.state.textDecorationLine}]}>
              {this.props.val.note}
            </TextInput>
            {/*</TouchableOpacity>*/}
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>Delete</Text>
          </TouchableOpacity>



        </View>
    );


  }
}


const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed'
  },
  noteText: {
    paddingLeft: 20,
    fontSize: 20,
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white'
  },
  noteEdit: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 100,
    flex: 1,
    width: 80,
    height: 40
  },
  noteEditText: {
    color: 'white'
  },
  noteCompleteText: {
    color: 'green',
  },
  checkboxEmpty:{
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'purple'
  },
});