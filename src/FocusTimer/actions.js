import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from './sounds.js'

export function running() {
  state.isRunning = document.documentElement.classList.toggle('running')
  
  sounds.buttonPressAudio.play()
  timer.countdown()
}
export function stopped() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  sounds.buttonPressAudio.play()
}
export function reset(){
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}
export function plus(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  minutes += 5
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()
}
export function minus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  if (minutes < 5){
    return
  }
  minutes -= 5
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()
}

export function tree() {
  const isPlaying = document.documentElement.classList.contains('tree');

  sounds.cafeteria.pause();
  sounds.chuva.pause();
  sounds.lareira.pause();
  sounds.floresta.pause();
  state.isMute = document.documentElement.classList.remove ('rain', 'store', 'fire')

  if (!isPlaying) {
    document.documentElement.classList.add('tree');
    sounds.floresta.play();
  } else {
    document.documentElement.classList.remove('tree');
    sounds.floresta.pause();
  }
}
export function rain() {
  const isPlaying = document.documentElement.classList.contains('rain');

  sounds.cafeteria.pause();
  sounds.chuva.pause();
  sounds.lareira.pause();
  sounds.floresta.pause();
  state.isMute = document.documentElement.classList.remove ('tree', 'store', 'fire')

  if (!isPlaying) {
    document.documentElement.classList.add('rain');
    sounds.chuva.play();
  } else {
    document.documentElement.classList.remove('rain');
    sounds.chuva.pause();
  }
}
export function store() {
  const isPlaying = document.documentElement.classList.contains('store');

  sounds.cafeteria.pause();
  sounds.chuva.pause();
  sounds.lareira.pause();
  sounds.floresta.pause();
  state.isMute = document.documentElement.classList.remove ('rain', 'tree', 'fire')

  if (!isPlaying) {
    document.documentElement.classList.add('store');
    sounds.cafeteria.play();
  } else {
    document.documentElement.classList.remove('store');
    sounds.cafeteria.pause();
  }
}
export function fire() {
  const isPlaying = document.documentElement.classList.contains('fire');

  sounds.cafeteria.pause();
  sounds.chuva.pause();
  sounds.lareira.pause();
  sounds.floresta.pause();
  state.isMute = document.documentElement.classList.remove ('rain', 'store', 'tree')

  if (!isPlaying) {
    document.documentElement.classList.add('fire');
    sounds.lareira.play();
  } else {
    document.documentElement.classList.remove('fire');
    sounds.lareira.pause();
  }
}