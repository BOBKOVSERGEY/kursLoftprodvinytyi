var bs = require("browser-sync").create();

bs.watch(['./flexbox/*.*', './flexbox/style.scss', './flexbox/style.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./flexbox"
});
