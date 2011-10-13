set _REALPATH=%~dp0
@java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.RunScript -url jdbc:h2:tcp://localhost/./test -user sa -script backup.zip -options compresion zip