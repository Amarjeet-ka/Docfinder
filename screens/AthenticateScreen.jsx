import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppoinCnfScr = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Appointment Confirmation</Text>
      <Text style={styles.details}>Registratin no: 0215648799 </Text>
      <Text style={styles.details}>Date: 12/07/2023 </Text>
      <Text style={styles.details}>Time: 09:15 </Text>
      <Text style={styles.details}>Location: Mumbai,Andheri West</Text>
      <Text style={styles.subheading}>Doctor's Contact Details:</Text>
      <Text style={styles.doctorContact}>+91 2352 45 2654</Text>
      <Text style={styles.reminder}>Don't forget your appointment on:{'\n'}     12/07/2023 at 09:15 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  doctorContact: {
    fontSize: 18,
    marginBottom: 10,
  },
  reminder: {
    fontSize: 16,
    marginTop: 20,
    
  },
});

export default AppoinCnfScr;



