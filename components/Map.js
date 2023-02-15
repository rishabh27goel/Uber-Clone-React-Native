import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import Color from 'color';

const location = {

    latitude: 20.3318456, 
    longitude: 80.0296002,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
};

const coords = [
    {
        latitude: 20.3318456, 
        longitude: 80.0296002
    },
    {
        latitude: 27.771707, 
        longitude: 80.0296002
    }
]

const Map = () => {
  return (
    <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={location}
    >
        <Marker 
            coordinate={coords[0]} 
        />
        <Marker coordinate={coords[1]} />
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})