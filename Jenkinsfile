pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/mahitha561/my-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'nohup node src/app.js > output.log 2>&1 &'
            }
        }
    }
}