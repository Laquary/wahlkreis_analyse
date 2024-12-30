#!/usr/bin/node


const fs = require('fs');

// read similarity_data
const similarity_data = JSON.parse(fs.readFileSync('similarity_data.json'));
const simplifiedData = [];
for (let i = 1; i < 300; i++) {
    simplifiedData[i-1] = [];
    for (let j = 1; j < 300; j++) {
        simplifiedData[i-1][j-1] = Math.round(similarity_data[i][j] * 100) / 100;
    }
}

// save in file with `fs.writeFileSync`
fs.writeFileSync('smaller_similarity.json', JSON.stringify(simplifiedData));