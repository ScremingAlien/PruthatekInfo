module.exports = {
     apps: [
          {
               name: "info-frontend",
               script: "npm",
               args: "run start",
               cwd: "/home/ec2-user/pruthatek-info/apps/frontend",
               exec_mode: "cluster",   // Enables zero-downtime reloads
               autorestart: true,
               watch: false,
               max_memory_restart: "1G",
               env: {
                    NODE_ENV: "production",
                    PORT: 7000,
                    NEXT_PUBLIC_BACKEND_API: "https://pruthatek.info/api",
                    NEXT_PUBLIC_GRAPHQL_API: "https://pruthatek.info/api/graphql"
               }
          },
          {
               name: "info-backend",
               script: "index.js",
               cwd: "/home/ec2-user/pruthatek-info/apps/backend",
               interpreter: "node",
               autorestart: true,
               watch: false,
               restart_delay: 5000,
               max_memory_restart: "1G",
               env: {
                    NODE_ENV: "production",
                    PORT: 4004
               }
          }
     ]
};