import React,{Component, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import p from '../assets/p.jpg';

class imageSource extends Component{    

   imageSource  = require('../assets/p.jpg');
}


const  ClientProfileScreen =( { imageSource, fullSizeImageSource }) => {

  
  const [showFullSizeImage, setShowFullSizeImage] = useState(false);
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("newhome")
  };

  const handlePress = () => {
    setShowFullSizeImage(true);
  };

  const handleHideFullSizeImage = () => {
    setShowFullSizeImage(false);
  };


  return (
 <>
    <View style={styles.container}>
      <Text style={styles.fontprofile} >Profile</Text>

     <TouchableOpacity  onPress={handlePress}>
     <Image source={p} style={styles.profilePicture} />

     </TouchableOpacity>

     {showFullSizeImage && (
        <TouchableOpacity onPress={handleHideFullSizeImage}>
          <Image source={fullSizeImageSource} />
        </TouchableOpacity>
      )}


      <Text style={styles.name}>Amarjeet Kumar</Text>
      <Text style={styles.contact}> Email: amarjeet@gmail.com</Text>
      <Text style={styles.contact}> Mobile: +91 0123456789</Text>
      <Text style={styles.font}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nostrum, alias, 
        laudantium at molestias voluptates illum architecto pariatur.</Text>
      
    </View>
    <View style={styles.bottom}>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>  <Icon name="edit" size={32} color="#888" /></Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}> <Icon name="sign-out" size={32} color="#888" /></Text>
      </TouchableOpacity>
      </View>
 </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  fontprofile:{
    color:'black',
    paddingTop:50,
    padding:35 
  },
  profilePicture: {
    width: 170,
    height:170,
    borderRadius:150,
    marginTop:10,
  },
  name: {
    fontSize: 28,
    color:'black',
  
    marginTop:18,
    marginBottom: 10,
  },
  contact: {
    flexDirection:'column',
    color:'black',
    fontSize: 16,
    marginBottom: 5,
    borderColor: 'black',
    borderTopWidth: .2,
    borderBottomWidth: 0.2,
    borderLeftWidth:0.2,
    borderRightWidth:0.2,
    borderRadius:5,
    paddingLeft:60,
    paddingRight:60,
    padding: 10,
  },
  font:{
    color:'black',
    paddingTop:100,
    padding:30,
  },
  bottom:{
 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:'space-around',
    borderColor: 'black',
    borderTopWidth: .2,
    borderRadius: 1,
    padding: 10,

  },
  editButton: {

    padding: 10,
    borderRadius: 5,

  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
   
    padding: 10,
    borderRadius: 5,

  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});




export default ClientProfileScreen;

