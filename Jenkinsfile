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
    agent{ docker { image 'openjdk' }  }
    agent{ docker { image 'node' }  }
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
          //sh 'curl http://192.168.1.7:3306'
          //sh'npm run start:prod'
          // sh 'docker build -t angularproject:latest .'
   
         // sh 'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose'
         //   sh 'chmod +x /usr/local/bin/docker-compose'
         //  sh 'docker-compose up'
          
          sh 'docker build -t backend:latest .'


      }
    }
  }
}
