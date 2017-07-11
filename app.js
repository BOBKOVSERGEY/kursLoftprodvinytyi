var bs = require("browser-sync").create();

bs.watch(['deferred/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./deferred"
});