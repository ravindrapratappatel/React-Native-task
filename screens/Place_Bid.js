import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Collections from './Collections';
import Detail_Screen from './Detail_Screen';

const Place_Bid = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}> 
          <Icon name="arrow-back-ios" size={25} color='black' />
          </TouchableOpacity>
        </Text>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 20}} >Place Bid </Text>
        <Text>
          <TouchableOpacity> 
          <Icon name="more-horiz" size={25} color='black' />
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.box2}>
        <Detail_Screen />
      </View>
      <View style={styles.box3}>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 17}}>Current Bid</Text>
          <Text style={{color: 'blue'}}> See all </Text>
        </View>
        <View style={{flex: 0.8, flexDirection: 'column'}}>
          <View style={{flex: 0.6}}>
            <View
              style={{
                flex: 0.9,
                flexDirection: 'row',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 25,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 0.7,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <View style={styles.avtar}>
                  <Text>
                    <Icon name="person" size={20} color="white" />
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'black', fontWeight: '600'}} >
                    Bid Placed By <Text style={{color: 'blue'}}>Barly</Text>
                  </Text>
                  <Text>Dec 26, 2021 at 08:20 PM</Text>
                </View>
              </View>
              <View style={{flex: 0.3, justifyContent: 'center'}}>
                <Text><Text style={{color: 'black', fontWeight: '600'}} >10.05 </Text> ETH</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                flex: 0.4,
                flexDirection: 'row',
                height: '90%',
                backgroundColor: 'white',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'blue'}}>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                flex: 0.4,
                flexDirection: 'row',
                height: '90%',
                backgroundColor: 'blue',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Place Bid</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  box1: {
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  box2: {
    flex: 0.62,
    flexDirection: 'column',
    marginBottom: 20,
  },
  box3: {
    flex: 0.3,
  },
  avtar: {
    borderRadius: 12.5,
    width: 25,
    height: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderColor: 'red',
  },
});

export default Place_Bid;
