
const inputText = document.getElementById('inputText');
const voiceSelect = document.getElementById('voiceSelect');
const speakButton = document.getElementById('speakButton');
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = voice.name;
    voiceSelect.appendChild(option);
  });
};
speakButton.addEventListener('click', () => {
  const text = inputText.value;
  const selectedVoice = voices[voiceSelect.value];
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  window.speechSynthesis.speak(utterance);
});
function textToSpeech(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}


