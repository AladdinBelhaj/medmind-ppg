pipeline {
    agent any

    environment {
        FRONT_IMAGE = 'medmind-frontend:latest'
        BACK_IMAGE = 'medmind-backend:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/AladdinBelhaj/medmind-ppg'
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    sh 'docker build -t ${FRONT_IMAGE} .'
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    sh 'docker build -t ${BACK_IMAGE} ./backend'
                }
            }
        }
    }
}
