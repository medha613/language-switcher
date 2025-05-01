module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "./node_modules/next/dist/bin/next",
      args: "start -H 0.0.0.0 -p 80",
      env: {
        NODE_ENV: "production",
      },

      watch: false,
      error_file: "./logs/error.log",
      out_file: "./logs/output.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
