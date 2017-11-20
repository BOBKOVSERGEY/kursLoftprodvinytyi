var bs = require("browser-sync").create();

bs.watch(['nodejs/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "kursLoftprodvinytyi/nodejs"
});
