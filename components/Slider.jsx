import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import tw from 'twrnc';
// import tw from 'twrnc';

function Slider({ sliderData }) {
    const width = Dimensions.get('window').width;
    console.log(sliderData);
    // Base URL of your server (change it accordingly)
    const BASE_URL = "http://103.107.184.80:3000";

    return (
        <View style={tw`flex flex-row`}>
            <Carousel
                loop
                width={width}
                height={width / 1.5}
                autoPlay={true}
                data={sliderData.map(img => BASE_URL + img)} // Convert to full URLs
                scrollAnimationDuration={2000}
                renderItem={({ item }) => (
                    <View style={tw`w-full h-full`}>
                        <Image
                            source={{ uri: item }} // Load image from full URL
                            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default Slider;
