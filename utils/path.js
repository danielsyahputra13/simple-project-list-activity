/**
 * get entry point of project
 */
const path = require("path");
module.exports = path.dirname(require.main.filename);