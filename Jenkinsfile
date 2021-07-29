pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3039:3000' 
        }
    }
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
     
         sh 'npm install'
         //sh 'rm -rf ./dist'
        // sh 'npm run build'
         sh 'telnet 127.0.0.1 8081'
         sh 'npm run start:prod'
        
      }
    }
    
    stage("test") {
      steps {
        echo 'testing the application...'
  

      }
    }
    
    stage("deploy") {
      steps {
        echo 'deploying the application...'
       // sh 'docker build -t angularproject:latest .'

      }
    }
  }
}
