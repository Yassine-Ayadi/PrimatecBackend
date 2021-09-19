pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3039:3000' 
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
     
         sh 'npm install'
         //sh 'rm -rf ./dist'
        // sh 'npm run build'
         sh 'npm run build'
        
      }
    }
    
   stage('Sonarqube') {
    environment {
        CI = 'true'
        scannerHome = tool 'sonarqube'
    }
    agent{ docker { image 'openjdk'}  }

    steps {
        withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
    }
}
       
    
    stage("deploy") {
      steps {
        echo 'deploying the application...'        
          sh 'docker build -t backend:latest .'

      }
    }
  }
}
