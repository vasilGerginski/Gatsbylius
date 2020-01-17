def STARTED = false

pipeline {
  agent any
  options {
      buildDiscarder(logRotator(numToKeepStr: '20'))
  }
  stages {
    stage('Init') {
      when {
        anyOf {
          branch 'master'
        }
      }
      steps {
        echo "Init $BRANCH_NAME on $JENKINS_URL ..."
      }
    }
    stage('Build') {
      when {
        anyOf {
          branch 'master'
        }
      }
      steps {
        echo "Building $BRANCH_NAME on $JENKINS_URL ..."
      }
    }
    stage('Deploy staging') {
      when {
        anyOf {
          branch 'develop'
        }
      }
      steps {
        echo "Deploying $BRANCH_NAME from $JENKINS_URL ..."
      }
    }
  }
  post {
      always {
          sh '''
            docker-compose down
            '''
          deleteDir()
      }
  }
}