import React from 'react';
import Toast from 'react-native-tiny-toast';

type ToastProps = {
  message: string,
  visible: boolean
}

const AppToast = ({message, visible}: ToastProps) => {

  return (
    <Toast
      visible={visible}
      position={0}
    >{message}</Toast>
  )
}

export default AppToast;

