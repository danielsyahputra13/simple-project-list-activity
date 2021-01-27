const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const p = path.join(rootDir, "data", "products.json");

module.exports = class Activity {
    constructor(course, codeCourse, lecture, room, sks, description) {
        this.course = course;
        this.codeCourse = codeCourse;
        this.lecture = lecture;
        this.room = room;
        this.sks = sks;
        this.description = description;
    }
}