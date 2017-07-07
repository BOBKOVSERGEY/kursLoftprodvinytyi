var bs = require("browser-sync").create();

bs.watch(['json/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./json"
});