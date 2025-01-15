async function startClickAudio(audio, gain) {
  // Создаем AudioContext
  this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Создаем GainNode
  this.gainNode = this.audioContext.createGain();
  this.gainNode.gain.value = gain; // Устанавливаем уровень громкости
  this.gainNode.connect(this.audioContext.destination);

  // Загружаем аудиофайл
  const response = audio;
  if (!response.ok) throw new Error("Network response was not ok");
  const arrayBuffer = await response.arrayBuffer();

  // Декодируем аудиоданные
  this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

  // Функция для воспроизведения аудио
  const playAudio = () => {
    const source = this.audioContext.createBufferSource();
    source.buffer = this.audioBuffer;
    source.connect(this.gainNode);
    source.start(0);
  };

  playAudio(); // Запускаем воспроизведение
}

export default startClickAudio;
