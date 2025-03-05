import { Video } from 'expo-av';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState({});
    const { width: screenWidth } = Dimensions.get('window');
    useEffect(() => {
        // Optionally fetch status here
        (async () => {
            await Video.getStatusAsync();
        })();
    }, [video]);

    const handlePlaybackStatusUpdate = (status) => {
        setStatus(status);
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                style={{
                    width: screenWidth, // Adjust width dynamically
                    height: 250, // Set a fixed height
                    alignSelf: 'center', // Center the video
                }}
                source={{ uri: video }}  // Use the passed video URL here
                // useNativeControls
                resizeMode="contain"
                isLooping
                isMuted={false}
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
    },
});

export default VideoPlayer;
