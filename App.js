import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         TouchableHighlight,
         Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <TextInput style={styles.searchInput} placeholder='Type anything'/>
          <TouchableHighlight style={styles.button} underlayColor='#D3D3D3'>
              <Text style={styles.buttonText}>Press this button</Text>
          </TouchableHighlight>

          <Image source={require('./assets/road.jpg')} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  searchInput: {
      height: 40,
      width: 250,
      fontSize: 18,
      borderWidth: 0,
      color: 'black',
      borderColor: '#48BBEC',
      borderRadius: 5,
      padding: 10,
      margin:50
  },
  button: {
      height: 40,
      width: 180,
      margin: 20,
      backgroundColor: '#48BBEC',
      alignSelf:'center',
      justifyContent: 'center'
  },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      alignSelf:'center',
      justifyContent:'center'
  },
    image: {
        width: 400,
        height: 225
    }
});
