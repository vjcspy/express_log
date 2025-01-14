module.exports = {
    apps: [
        {
            name: "express-log-server", // Tên process
            script: "main.js", // File chính để chạy server
            instances: 1, // Số lượng instance (1 = single instance)
            exec_mode: "fork", // Chế độ chạy (fork hoặc cluster)
            watch: true, // Tự động restart khi file thay đổi
            env: {
                NODE_ENV: "development", // Biến môi trường cho development
                PORT: 3005,
            },
            env_production: {
                NODE_ENV: "production", // Biến môi trường cho production
                PORT: 3005,
            },
        },
    ],
};
