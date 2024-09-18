#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function countStudents(path) {
  try {
    let lines = fs.readFileSync(path).toString();
    const lines_array = lines.split('\n').splice(1)
    const students = []
    for (let i = 0; i < lines_array.length; i++) {
      students[i] = lines_array[i].split(',')[0]
      
    }
    console.log(`Number of students: ${lines_array.length}`)
    console.log(`6. List: LIST_OF_FIRSTNAMES: ${students}`);
  } catch (error) {
    console.log('Cannot load the database');
    return(error)
  }
}

module.exports = countStudents
