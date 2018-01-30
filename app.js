var bs = require("browser-sync").create();

bs.watch(['./interactivnye-elementy/*.*', './interactivnye-elementy/css/style.scss', './interactivnye-elementy/css/style.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./interactivnye-elementy"
});
