#!/bin/bash

NEXUS_URL="http://172.16.1.122:8081/repository/maven-releases/"
GROUP_ID="com.pilog.mdm.cloud"

for dir in src/main/libs/*; do
  if [ -d "$dir" ]; then
    ARTIFACT=$(basename "$dir")

    JAR=$(find $dir -name "*.jar")
    POM=$(find $dir -name "*.pom")

    echo "Uploading $ARTIFACT..."

    mvn deploy:deploy-file \
      -DgroupId=$GROUP_ID \
      -DartifactId=$ARTIFACT \
      -Dversion=1.0.0 \
      -Dpackaging=jar \
      -Dfile=$JAR \
      -DpomFile=$POM \
      -DrepositoryId=nexus \
      -Durl=$NEXUS_URL

  fi
done
