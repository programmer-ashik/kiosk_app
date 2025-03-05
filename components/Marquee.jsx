import React from 'react';
import { Text, View } from 'react-native';
import AutoScrolling from 'react-native-auto-scrolling';
import tw from 'tailwind-react-native-classnames';

const Marquee = ({ data }) => {
    return (
        <View style={tw` flex flex-row justify-center`}>
            <AutoScrolling
                endPadding={10}

            >
                <Text style={tw`py-10  text-4xl text-white font-extrabold`} >{data}</Text>
            </AutoScrolling>
        </View>
    )
}
export default Marquee