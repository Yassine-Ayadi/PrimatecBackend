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
          //sh 'curl http://192.168.1.7:3306'
          //sh'npm run start:prod'
       // sh 'docker build -t angularproject:latest .'
          sh 'apt-get install sudo'
          sh 'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose'
          sh 'sudo chmod +x /usr/local/bin/docker-compose'
          sh 'docker-compose up'


      }
    }
  }
}
