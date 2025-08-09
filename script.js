const imageInput = document.getElementById('imageUpload');
const image = document.getElementById('faceImage');
const slapSound = document.getElementById('slapSound');
const button = document.getElementById('slapBtn');
const slapMessage = document.getElementById('slapMessage');

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

button.addEventListener('click', function () {
  if (image.style.display === 'none') {
    alert('Please upload an image first!');
    return;
  }

  // Play sound
  slapSound.currentTime = 0;
  slapSound.play();

  // Animate face
  image.style.animation = 'slapShake 0.5s ease';
  setTimeout(() => {
    image.style.animation = '';
  }, 500);

  // Random funny text
  const funnyMessages = [
    "Ouch! That hurt! 😆",
    "Hey! Watch it! 😲",
    "You call that a slap? 🤨",
    "That's gonna leave a mark! 😂",
    "Mercy! 😭",
    "Woah! Chill! 😵"
  ];
  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  slapMessage.textContent = randomMessage;

  // Show & pop text
  slapMessage.style.display = 'block';
  slapMessage.style.animation = 'textPop 0.4s ease';
  setTimeout(() => {
    slapMessage.style.animation = '';
  }, 400);
});
