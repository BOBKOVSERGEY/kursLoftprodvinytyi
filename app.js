var bs = require("browser-sync").create();

bs.watch(['./flexbox/app/*.*', './flexbox/app/css/style.scss', './flexbox/app/css/style.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./flexbox/app"
});
