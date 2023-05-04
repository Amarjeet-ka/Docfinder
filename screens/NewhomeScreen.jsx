import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableHighlight, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const NewhomeScreen = () => {

  const navigation = useNavigation();

  const getprofile = () => {
    navigation.navigate('profile')
  } 

  const profile = () => {
    navigation.navigate("Client")
  }
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (text) => {
    setSearchQuery(text);
    // Implement search functionality here
  };

  return (
  
    <View style={styles.container}>


      <View style={styles.dashboard}>
    
        <TouchableOpacity style={styles.dashboardItem}>
          <Icon name="list-outline" size={28} color="#444" />
          <Text style={styles.dashboardItemText}>My Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardItem}>
          <Icon name="call-outline" size={28} color="green" />
          <Text style={styles.dashboardItemText}>Contact Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={profile}  style={styles.dashboardItem}>
          <Icon name="person-outline" size={28} color="blue" />
               <Text style={styles.dashboardItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for doctors by name or specialization"
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />

        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.recommendedDoctors}>
        <Text style={styles.recommendedDoctorsTitle}>Recommended Doctors</Text>
        {/* Render recommended doctors here */}
        <ScrollView>
 
      <TouchableOpacity onPress={getprofile}> 
      <Text style={styles.flatlist}>  <Icon name="person-circle-outline" size={100} color="gray" />
    
       Dr. Jane Deo{'\n'}                  Cardiologiest</Text> 
       </TouchableOpacity>

       <TouchableOpacity onPress={getprofile}> 
      <Text style={styles.flatlist}>  <Icon name="person-circle-outline" size={100} color="white" />
    
       Dr. Jane Deo{'\n'}                  Cardiologiest</Text> 
       </TouchableOpacity>
       
       <TouchableOpacity onPress={getprofile}> 
      <Text style={styles.flatlist}>  <Icon name="person-circle-outline" size={100} color="purple" />
    
       Dr. Jane Deo{'\n'}                  Cardiologiest</Text> 
       </TouchableOpacity>
       
       <TouchableOpacity onPress={getprofile}> 
      <Text style={styles.flatlist}>  <Icon name="person-circle-outline" size={100} color="red" />
    
       Dr. Jane Deo{'\n'}                  Cardiologiest</Text> 
       </TouchableOpacity>
       
       <TouchableOpacity onPress={getprofile}> 
      <Text style={styles.flatlist}>  <Icon name="person-circle-outline" size={100} color="yellow" />
    
       Dr. Jane Deo{'\n'}                  Cardiologiest</Text> 
       </TouchableOpacity>
       
       <TouchableOpacity onPress={getprofile}> 
      <Text style={styles.flatlist}>  <Icon name="person-circle-outline" size={100} color="black" />
    
       Dr. Jane Deo{'\n'}                  Cardiologiest</Text> 
       </TouchableOpacity>
       





        <TouchableOpacity
      style={[styles.button]}
      onPress={getprofile}
   
    >  
      <Text style={styles.title}> Get Details</Text>
    </TouchableOpacity>

     </ScrollView>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 25,
    padding:20
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  dashboardItem: {
    alignItems: 'center',
    paddingLeft:20
  },
  dashboardItemText: {
    fontSize: 10,
    marginTop: 0,
    color: '#888',
    paddingLeft:5
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop:10,
    marginLeft:30,
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#00aaff',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  recommendedDoctors: {
    width: '100%',
    flex:1,
    backgroundColor:'#fff'
  },
  recommendedDoctorsTitle: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth:.5,
    borderBottomColor:'#444',
    marginBottom: 10,
  },
  flatlist: {
    margin:10,
    padding:10,
    borderRadius:15,
    /**/
borderWidth: 1,
borderColor: '#fff',
elevation:5,
backgroundColor:'#4dc3ff',
  color:'white',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 5,

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    },
  button: {
    backgroundColor: '#00aaff',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin:15,
    marginTop:70,
  },
  profile:{
    color: 'white',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default NewhomeScreen;
