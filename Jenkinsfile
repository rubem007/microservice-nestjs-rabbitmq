pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                checkout scm
            }
        }

        stage ('Build Docker Image') {
            steps {
                script {
                    dockerapp = docker.build("rubemnascimento81/app-a:${env.BUILD_ID}", "-f ./app-a/Dockerfile ./app-a")
                }
            }
        }
    }
}