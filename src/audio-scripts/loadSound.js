async function loadSound(audio) {
  const response = audio;
  const arrayBuffer = await response.arrayBuffer();
  this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
}

export default loadSound;
