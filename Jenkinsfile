pipeline {
    agent any
    
    stages {
        stage('checkout') {
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/saninkiliyamannil/jenkins-hosting.git
                    ls -l
                '''
            }
        }
        stage('Deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r jenkins-hosting/* /var/www/html
                '''
            }
        }
    }
}
