import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from "./sounds.js"


export function toggleRunning(){
    state.isRunnig = document.documentElement.classList.toggle('running')

    timer.countdonw()

    audio.buttonPressAudio.play()
}

export function reset(){
    state.isRunnig = false
    document.documentElement.classList.remove('running')
    audio.buttonPressAudio.play()
}

export function set(){
    el.minutes.setAttribute('contenteditable',true)
    el.minutes.focus()
}


export function toggleMusic(){
    state.ismute = document.documentElement.classList.toggle('music-on')

    if(state.ismute){
    audio.bgAudio.play()
    
    }else{
        audio.bgAudio.pause()
    }
    }

