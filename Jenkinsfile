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
                    // Build the Docker image
                    dockerapp = docker.build("rubemnascimento81/app-a:${env.BUILD_ID}", "-f ./app-a/Dockerfile ./app-a")
                }
            }
        }

        stage ('Push Image') {
            steps {
                script {
                    // Push the image to the Docker registry (e.g., Docker Hub)
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials-id') {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }

        stage ('Deploy k8s') {
            steps {
                script {
                    withKubeConfig([credentialsID: 'kubeconfig']) {
                        sh 'kubectl apply -f ./k8s/deployment.yaml'
                    }
                }
            }
        }
    }
}