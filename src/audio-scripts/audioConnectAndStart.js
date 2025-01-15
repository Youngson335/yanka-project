async function audioConnectAndStart() {
  const source = this.audioContext.createBufferSource();
  source.buffer = this.audioBuffer;
  source.connect(this.gainNode);
  source.start(0);
}

export default audioConnectAndStart;
