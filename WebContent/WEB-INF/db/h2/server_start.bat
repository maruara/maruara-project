set _REALPATH=%~dp0
rem @java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Server -tcp -tcpAllowOthers -tcpPort 9092 -web -webAllowOthers -webPort 8082 -browser -webSSL -baseDir "%_REALPATH%/db"
@java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Server -tcp -tcpAllowOthers -tcpPort 9092 -web -webAllowOthers -webPort 8082 -browser -baseDir "%_REALPATH%/db"
