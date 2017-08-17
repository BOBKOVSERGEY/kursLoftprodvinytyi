var bs = require("browser-sync").create();

bs.watch(['javascript2/test/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "kursLoftprodvinytyi/javascript2/test"
});
