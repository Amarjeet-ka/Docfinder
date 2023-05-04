import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button,TouchableOpacity } from 'react-native';
import r from '../assets/d.jpg';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  
const navigation = useNavigation();

const signup = () => {
  navigation.navigate("rn")
}

const signin = () => {
  navigation.navigate("ln")
}

const profile = () => {
  navigation.navigate("Client")
}

  return (

    <ImageBackground source={r} style={styles.backgroundImage}>

      <View style={styles.container}>
  
        <Text style={styles.heading}>Health Care</Text>
      

        <View style={styles.butcont} >
          
<TouchableOpacity
      style={[styles.button]}
      onPress={signin}
   
    >
      <Text style={styles.title}>Sign in</Text>
    </TouchableOpacity>

           <TouchableOpacity
      style={[styles.button]}
      onPress={signup}
   
    >
      <Text style={styles.title}> Sign up</Text>
    </TouchableOpacity>
    
   
        </View>


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00aaff',
    marginBottom: 500,
    borderBottomWidth:1.5,
    borderBottomColor:'#444'
  },
  font:{
 
  },
  button: {
    backgroundColor: '#444',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop:0,
    margin:5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  butcont:{
    textAlign:'center',
    flexDirection:'row'
  }

});

export default HomeScreen;