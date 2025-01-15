function vibrateDevice(duration) {
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  } else {
    console.warn("Вибрация не поддерживается на этом устройстве.");
  }
}

export default vibrateDevice;
