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
         sh 'curl http://localhost:8080'
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
