

import { controls } from "./elements.js";

import * as actions from './actions.js';

import * as el from './elements.js';

import state from "./state.js";

import { updateDisplay } from "./timer.js";




export function registerControls(){
    
    console.log('aaa')
    controls.addEventListener('click', events => {

        const action = events.target.dataset.action

        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]()

    })
}

export function setMinutes(){
     el.minutes.addEventListener('focus',()=>{
        el.minutes.textContent = ''
     })

     el.minutes.onkeypress = (events)=> /\d/.test(events.key)

     el.minutes.addEventListener('blur',(events)=>{
       let time= events.currentTarget.textContent
       time = time > 60 ? 60 : time

       state.minutes = time
       state.seconds = 0
       
       updateDisplay()
       el.minutes.removeAttribute('contenteditable')
     })
}

