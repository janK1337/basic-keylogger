'use strict';

const ioHook = require("iohook");

class keypress {

    static fromCharCode(num) {
        if(num <= 31) { // https://www.w3schools.com/charsets/ref_html_ascii.asp
            num = "Control character"; 
            return num;
        }
        if(num == 32) {
            num = "Space";
            return num;
        }
        num = String.fromCharCode(num);
        return num;
    }
}
class listener {

    constructor(interval) {  
        let pressedkeys = [];
        this.interval = isNaN(interval) ? 3000 : interval;
       
        ioHook.on('keypress', event => {
            pressedkeys.push(keypress.fromCharCode(event.keychar)); 
        })
        setInterval(function() {
            console.log(pressedkeys);
            pressedkeys = []
        }, this.interval)
        ioHook.start(); 
    }
   
} 
module.exports = listener



