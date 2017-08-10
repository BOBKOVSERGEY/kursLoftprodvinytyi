var bs = require("browser-sync").create();

bs.watch(['paralax/*.*', 'paralax/css/*.css', 'paralax/js/*.js']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "kursLoftprodvinytyi/paralax"
});
