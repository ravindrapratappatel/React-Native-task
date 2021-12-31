import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Collections from './Collections';

const Detail_Screen = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.box1}>
        <ImageBackground
          source={require('../assets/images/img.jpg')}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 15,
              marginRight: 25,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#808080',
                height: 30,
                width: 60,
                borderRadius: 25,
              }}>
              <Text style={{color: 'white'}}>
                <Icon name="favorite-border" size={15} color="white" /> 80
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#808080',
                height: 30,
                width: 100,
                borderRadius: 25,
              }}>
              <Text style={{color: 'white'}}>5.2k Views</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#808080',
                height: 30,
                width: 100,
                borderRadius: 25,
              }}>
              <Text style={{color: 'white'}}>02h 10m 12s</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.box2}>
        <Collections
          name="Cubex Project X Geo"
          isverified={true}
          totalItems="12.200"
        />
      </View>
      <View style={styles.box3}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 17}}>
            Suffle Runner#110
          </Text>
          <Text>
            <Text style={{color: 'black', fontWeight: '600'}}>10.01</Text> ETH
          </Text>
        </View>
        <View>
          <Text
            style={{
              flexWrap: 'wrap',
              fontFamily: 'Times New Roman", Times, serif',
            }}>
            110 of 800 beautifully rendered 3D Non-fungiblie People (NFP) PFPs
            algorithemically generated and rendered breathtaking 3D.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    borderRadius: 12,
    padding: 0,
  },
  box1: {
    flex: 0.7,
    padding: 5,
    borderRadius: 30,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  box2: {
    flex: 0.1,
    marginTop: 10,
    marginBottom: 20,
  },
  box3: {
    flex: 0.2,
  },
});

export default Detail_Screen;
