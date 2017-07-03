var bs = require("browser-sync").create();

bs.watch(['jquery/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./jquery"
});