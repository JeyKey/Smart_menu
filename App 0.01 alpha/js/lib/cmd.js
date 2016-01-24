function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'js/lib/click.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
};
