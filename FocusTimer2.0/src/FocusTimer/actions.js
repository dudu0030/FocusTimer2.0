import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle ('running')

    timer.countdown()
    sounds.Forest.play()
    sounds.Rain.play()
}

export function stop() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function playforest() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    sounds.Forest.play()
}


