import { useEffect, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import DateTime from './components/DateTime';
import Loader from './components/Loader';
import Marquee from './components/Marquee';
import Slider from './components/Slider';
import VideoPlayer from './components/VideoPlayer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { width: screenWidth } = Dimensions.get('window');
  const [sliderData, setSliderData] = useState(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch("http://192.168.0.114:3000/api/slider_images"); // Use your actual API URL
        const data = await response.json();

        if (data.success) {
          setSliderData(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Stop loading when fetch is complete
      }
    };

    fetchSliderData();
  }, [sliderData]);

  if (isLoading || !sliderData) {
    return <Loader />;
  }

  // Base URL for the images
  const BASE_URL = "http://192.168.0.114:3000";

  // Ensure image URLs are correctly formatted
  const formattedSliderImages = sliderData.sliderImages.map(imagePath => `${BASE_URL}/${imagePath}`);

  return (
    <View style={tw`bg-white w-full`}>
      <View style={tw`w-full`}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Image
            source={{ uri: `${BASE_URL}/${sliderData.headerImage.bdFlag}` }}
            style={{
              width: screenWidth * 0.4,
              height: screenWidth * 0.3 * (28 / 40)
            }}
          />
          <Image
            source={{ uri: `${BASE_URL}/${sliderData.headerImage.cglogo}` }}
            style={{
              width: screenWidth * 0.2,
              height: screenWidth * 0.3 * (28 / 40)
            }}
          />
          <Image
            source={{ uri: `${BASE_URL}/${sliderData.headerImage.cgFlag}` }}
            style={{
              width: screenWidth * 0.4,
              height: screenWidth * 0.3 * (28 / 40)
            }}
          />
        </View>

        <View style={tw`bg-blue-500`}>
          <Marquee data={sliderData.title} />
        </View>

        {/* Pass the formatted slider image URLs */}
        <Slider sliderData={sliderData.sliderImages} />

        {sliderData.video && (
          <View
            style={{
              width: screenWidth,
              height: screenWidth * 0.5 * (50 / 50),
            }}>
            <VideoPlayer video={`${BASE_URL}/${sliderData.video}`} />
          </View>
        )}

        <View style={tw`bg-black h-full w-full`}>
          <DateTime />
        </View>
      </View>
    </View>
  );
}
