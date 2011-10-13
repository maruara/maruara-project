set _REALPATH=%~dp0
@java -cp ./bin/h2*.jar org.h2.tools.Server -tcpShutdown tcp://localhost:9092 -tcpShutdownForce