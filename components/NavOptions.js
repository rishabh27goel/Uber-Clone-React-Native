import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';


const optionsData = [

    {
        id: 1,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: 2,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
  return (
    <View>
        <FlatList
            data={optionsData}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (

                <TouchableOpacity
                    style={tw`p-2 pl-4 pb-6 pt-4 bg-gray-200 m-2 w-36`}
                >
                    <Image
                        style={{

                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                        }}
                        source={{ uri: item.image }}
                    />  

                    <Text style={tw`mt-3 mx-3 text-base font-medium`}> {item.title} </Text>

                    <Icon
                        style={tw`mt-4 p-2 bg-black rounded-full w-10`}
                        name="arrowright"
                        type='antdesign'
                        color='white'
                    /> 
                </TouchableOpacity>
            )}
        >
            
        </FlatList>
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({})