module.exports = {
    apps: [
        {
            // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
            name: "node-movie",
            // pm2로 실행될 파일 경로
            script: "app.js",
	        watch: true,
            // 개발환경시 적용될 설정 지정
            env: {
                "PORT": 80,
                "NODE_ENV": "development"
            },
            // 배포환경시 적용될 설정 지정
            env_production: {
                "PORT": 8800,
                "NODE_ENV": "production"
            }
        }
    ]
};