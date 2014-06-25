#! /usr/bin/env node

var Speaker = require("speaker"),
    lame = require("lame"),
    fs = require("fs");

var speaker = new Speaker({
    channels: 2,
    bitDepth: 16,
    sampleRate: 44100
});

var decoder = new lame.Decoder();

var path = process.argv[2];
console.log("Your Music Is Going To Play");

fs.createReadStream(path).pipe(decoder).pipe(speaker);