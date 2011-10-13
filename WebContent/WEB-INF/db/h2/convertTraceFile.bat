set _REALPATH=%~dp0
@java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.ConvertTraceFile -traceFile "%_REALPATH%/test.trace.db" -script "./h2.init.sql"
