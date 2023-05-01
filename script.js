const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

function createContent() {
  const container = document.createElement('div');
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');

  container.classList.add('container');
  textarea.classList.add('textarea');
  keyboard.classList.add('keyboard');
  
  keys.forEach((e, i) => {
    const key = document.createElement('div');
    
    key.classList.add('key');
    key.textContent = keys[i];
    keyboard.append(key);

    if (keys[i] == 'Backspace') {
      key.classList.add('backspace');
    }
    if (keys[i] == 'Tab') {
      key.classList.add('tab');
    }
    if (keys[i] == 'Del') {
      key.classList.add('del');
    }
    if (keys[i] == 'Caps Lock') {
      key.classList.add('caps');
    }
    if (keys[i] == 'Enter') {
      key.classList.add('enter');
    }
    if (keys[i] == 'Shift') {
      key.classList.add('shift');
    }
    if (keys[i] == '▲' || keys[i] == '◄' || keys[i] == '▼' || keys[i] == '►' || keys[i] == 'Ctrl' || keys[i] == 'Win' || keys[i] == 'Alt') {
      key.classList.add('black-key');
    }
    if (keys[i] == ' ') {
      key.classList.add('space');
    }
  });

  container.append(textarea);
  container.append(keyboard);

  return container;
}

function createLayout() {
  const content = createContent();
  const body = document.querySelector('body');

  body.append(content);
}

createLayout();

// pressing a key

document.addEventListener('keydown', (event) => {
  const key = document.querySelectorAll('.key');
  console.log(event.key);
  key.forEach((elem) => {
    if (event.key == elem.innerHTML) {
      elem.classList.add('keydown');
    }
    if (event.key == elem.innerHTML.toUpperCase()) {
      elem.classList.add('keydown');
    }
    if (event.key == 'CapsLock' && elem.innerHTML == 'Caps Lock') {
      elem.classList.add('keydown');
    }
    if (event.key == 'Control' && elem.innerHTML == 'Ctrl') {
      elem.classList.add('keydown');
    }
    if (event.key == 'Meta' && elem.innerHTML == 'Win') {
      elem.classList.add('keydown');
    }
    if (event.key == 'ArrowUp' && elem.innerHTML == '▲') {
      elem.classList.add('keydown');
    }
    if (event.key == 'ArrowDown' && elem.innerHTML == '▼') {
      elem.classList.add('keydown');
    }
    if (event.key == 'ArrowLeft' && elem.innerHTML == '◄') {
      elem.classList.add('keydown');
    }
    if (event.key == 'ArrowRight' && elem.innerHTML == '►') {
      elem.classList.add('keydown');
    }
    if (event.key == 'Delete' && elem.innerHTML == 'Del') {
      elem.classList.add('keydown');
    }
  })
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelectorAll('.key');

  key.forEach((elem) => {
    elem.classList.remove('keydown');
  })
});