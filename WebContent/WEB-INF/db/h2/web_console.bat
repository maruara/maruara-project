set _REALPATH=%~dp0
rem @java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Server -web -webAllowOthers -webPort 8082 -browser -webSSL -baseDir %_REALPATH%/db/
@java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Server -web -webAllowOthers -browser -baseDir %_REALPATH%/db/