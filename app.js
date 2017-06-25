var bs = require("browser-sync").create();

bs.watch(['adaptiv/*.*', 'adaptiv/css/*.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "kursLoftprodvinytyi/adaptiv"
});