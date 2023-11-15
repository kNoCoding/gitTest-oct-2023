'use strict'

function getRandomInt(min, max) {
    var diff = max - min
    var res = Math.floor(Math.random() * diff + min)
    return res
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}