const CronJob = require("cron").CronJob;

/** It's running on every 3 seconds. */
new CronJob(
  "*/5 * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();