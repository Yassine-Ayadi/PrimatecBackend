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
         sh 'npm run build'
        
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
        sh 'docker build -t backend:latest .'


      }
    }
  }
}
