var bs = require("browser-sync").create();

bs.watch(['javascript2/*.*', 'javascript2/css/*.css', 'javascript2/js/*.js']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "kursLoftprodvinytyi/javascript2"
});
