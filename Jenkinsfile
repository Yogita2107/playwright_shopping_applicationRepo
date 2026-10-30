
pipeline {
    agent any

    environment {
        BASE_URL = 'http://49.249.29.4:8081/AppServer/Online_Shopping_Application/'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def status = bat(
                        script: 'npx playwright test',
                        returnStatus: true
                    )

                    if (status != 0) {
                       currentBuild.result = 'FAILURE'
                       echo 'Some Playwright tests failed.'
                    }
                }
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true,
                // linkRelative: false
            ])
        }
    }
}
