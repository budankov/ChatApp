import React from 'react';
// import GoogleSingInLesson from './src/lessons/GoogleSingInLesson';
import CameraGallery from './src/lessons/CameraGallery';
import { useNotification } from './src/notifications/useNotification';

const App = () => {
  useNotification();

  return <CameraGallery />;
};

// const styles = StyleSheet.create();

export default App;
