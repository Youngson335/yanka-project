import audio from "../assets/audio/atmosphere.wav";

let audioContext; // Переменная для хранения AudioContext
let gainNode; // Переменная для хранения GainNode
let source; // Переменная для хранения текущего источника
let isPlaying = false; // Флаг, указывающий, воспроизводится ли звук

async function startBackgroundAudio(gainValue = 0.4) {
  // Если AudioContext еще не создан, создаем его
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.gain.value = gainValue; // Устанавливаем уровень громкости
    gainNode.connect(audioContext.destination);
  }

  // Если звук уже воспроизводится, останавливаем его
  if (isPlaying) {
    source.stop();
  }

  // Загружаем аудиофайл
  const response = await fetch(audio);
  if (!response.ok) throw new Error("Network response was not ok");
  const arrayBuffer = await response.arrayBuffer();

  // Декодируем аудиоданные
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  // Создаем источник и воспроизводим аудио
  source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(gainNode);
  source.loop = true; // Устанавливаем зацикливание
  source.start(0);
  isPlaying = true; // Устанавливаем флаг воспроизведения
}

export default startBackgroundAudio;
