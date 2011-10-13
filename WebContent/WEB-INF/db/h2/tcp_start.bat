set _REALPATH=%~dp0
@java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Server -tcp -tcpAllowOthers -tcpPort 9092 -baseDir "%_REALPATH%/db"
