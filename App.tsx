import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
// import GoogleSingInLesson from './src/lessons/GoogleSingInLesson';
// import CameraGallery from './src/lessons/CameraGallery';
import GoogleMap from './src/lessons/GoogleMap';
import { useNotification } from './src/notifications/useNotification';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  useNotification();

  return <GoogleMap />;
};

// const styles = StyleSheet.create();

export default App;
