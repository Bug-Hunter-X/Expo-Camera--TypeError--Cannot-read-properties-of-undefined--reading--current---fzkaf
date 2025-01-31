```javascript
import * as React from 'react';
import { Camera, useCameraDevices } from 'expo-camera';

const App = () => {
  const devices = useCameraDevices();
  const [cameraRef, setCameraRef] = React.useState(null);
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken', photo);
    }
  };

  if (hasPermission === null) {
    return <View />; // Loading
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={setCameraRef}
      />
      <Button title="Take Picture" onPress={takePicture} />
    </View>
  );
};
```