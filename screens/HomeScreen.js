import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}> 
        {/* Logo Image */}
        <Image 
            style={{

                width: 100,
                height: 100,
                resizeMode: 'contain',
            }}
            source={{
                uri: 'https://links.papareact.com/gzs',
            }}
        />

        {/* Navigation Options */}
        <NavOptions />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})