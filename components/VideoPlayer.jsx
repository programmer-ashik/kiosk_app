import { Video } from 'expo-av';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState({});
    const { width: screenWidth } = Dimensions.get('window');
    useEffect(() => {

        (async () => {
            await Video.getStatusAsync();
        })();
    }, []);

    const handlePlaybackStatusUpdate = (status) => {
        setStatus(status);
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                style={{
                    width: screenWidth * 1,
                    height: screenWidth * .7
                }}
                // style={{ width: "100%", height: "100%", alignSelf: 'center' }}
                source={{ uri: video }}
                // useNativeControls
                resizeMode="contain"
                isLooping
                isMuted={true}
                shouldPlay
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "red",
        backgroundColor: "blue",
    },
});

export default VideoPlayer;
