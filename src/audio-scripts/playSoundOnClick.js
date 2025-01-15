async function playSound(audioFile, gainValue) {
  // Создаем AudioContext
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Создаем GainNode
  const gainNode = audioContext.createGain();
  gainNode.gain.value = gainValue; // Устанавливаем уровень громкости
  gainNode.connect(audioContext.destination);

  // Загружаем аудиофайл
  const response = await fetch(audioFile);
  if (!response.ok) throw new Error("Network response was not ok");
  const arrayBuffer = await response.arrayBuffer();

  // Декодируем аудиоданные
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  // Создаем источник и воспроизводим аудио
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(gainNode);
  source.start(0);
}

export default playSound;
