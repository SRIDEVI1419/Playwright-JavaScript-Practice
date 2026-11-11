pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Downloading project from GitHub'
                checkout scm
            }
        }

        stage('Check Node.js') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        
stage('Install Dependencies') {
    steps {
        bat 'npm ci'
        bat 'npx playwright install chromium firefox webkit'
    }
}
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Playwright execution completed'
        }
    }
}