var bs = require("browser-sync").create();

bs.watch(['animation/*.*', 'animation/css/*.*', 'animation/js/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "kursLoftprodvinytyi/animation"
});
