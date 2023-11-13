module.exports = {
  apps: [
    {
      script: "./index.js",
      watch: ".",
      instances: "max",
      env: {
        "NODE_ENV": "production",
        "PORT":3000,
        
      },
    },
  ],
};
