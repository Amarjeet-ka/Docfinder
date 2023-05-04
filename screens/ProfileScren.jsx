import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScren() {

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Icon name="person-circle-outline" size={100} color="#888" />
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.name}>Dr. Jane Doe</Text>
        <Text style={styles.specialization}>Cardiologist</Text>
        <View style={styles.rating}>
          <Icon name="star-outline" size={20} color="#ffa500" />
          <Icon name="star-outline" size={20} color="#ffa500" />
          <Icon name="star-outline" size={20} color="#ffa500" />
          <Icon name="star-outline" size={20} color="#ffa500" />
          <Icon name="star-outline" size={20} color="#ffa500" />
          <Text style={styles.ratingValue}>4.0</Text>
        </View>
      </View>
    </View>
    <View style={styles.body}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante in dolor
        vestibulum, id consectetur ipsum tristique. Integer convallis libero sed turpis
        lobortis ultricies.
      </Text>
      <Text style={styles.sectionTitle}>Services</Text>
      <View style={styles.services}>
        <View style={styles.service}>
          <Text style={styles.serviceTitle}>Cardio Checkup</Text>
          <Text style={styles.servicePrice}>$200</Text>
        </View>
        <View style={styles.service}>
          <Text style={styles.serviceTitle}>Echo Test</Text>
          <Text style={styles.servicePrice}>$100</Text>
        </View>
        <View style={styles.service}>
          <Text style={styles.serviceTitle}>Stress Test</Text>
          <Text style={styles.servicePrice}>$150</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Contact</Text>
      <View style={styles.contact}>
        <Icon name="call-outline" size={30} color='green' />
        <Text style={styles.contactInfo}>+1 123-456-7890</Text>
      </View>
      <View style={styles.contact}>
        <Icon name="mail-outline" size={30} color='red' />
        <Text style={styles.contactInfo}>jane.doe@example.com</Text>
      </View>
      <View style={styles.contact}>
        <Icon name="location-outline" size={30} color="blue" />
        <Text style={styles.contactInfo}>123 Main Street, New York, NY 10001</Text>
      </View>
      <CustomButton1/>
    </View>
 
  </View>
  )
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    padding: 0,
    backgroundColor:'#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:40,
    margin:10,
borderWidth: 1,
borderColor: '#fff',
elevation:5,
backgroundColor:'#4dc3ff',
borderRadius: 15,
padding: 10,

  },
  avatar: {
    marginRight: 10,
  },
  headerInfo: {
    flex:1,
    justifyContent:'center'
  },


name: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 5,
},
specialization: {
fontSize: 18,
color: '#888',
marginBottom: 5,
},
rating: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
ratingValue: {
marginLeft: 5,
fontSize: 18,
color: '#888',
},
body: {
flex:1,
borderColor: '#fff',
elevation:5,
backgroundColor:'rgb(255, 255, 250)',
borderRadius: 25,
borderBottomLeftRadius:0,
borderBottomRightRadius:0,
padding: 20,
width: '100%',
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
description: {
fontSize: 16,
marginBottom: 20,
},
services: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
service: {
borderWidth: 1,
borderColor: '#fff',
elevation:1.1,
backgroundColor:'#4dc3ff',
borderRadius: 7,
padding: 10,
width: '30%',
},
serviceTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
servicePrice: {
fontSize: 14,
color: '#888',
},
contact: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
contactInfo: {
fontSize: 16,
marginLeft: 10,
color: '#888',
},
button: {
  backgroundColor: '#00aaff',
  borderRadius: 22,
  paddingVertical: 10,
  paddingHorizontal: 12,
  margin:15,
  marginTop:40,
},
title: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
}

})


const CustomButton = () => {
  const navigation = useNavigation();

  const register = () => {
    navigation.navigate('rn')
  } 

  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={register}
   
    >
      <Text style={styles.title}>  Register Now</Text>
    </TouchableOpacity>
  );
};


const CustomButton1 = () => {
  const navigation = useNavigation();

  const auther = () => {
    navigation.navigate('auth');
  } 

  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={auther}
   
    >
      <Text style={styles.title}> Make an appointment</Text>
    </TouchableOpacity>
  );
};