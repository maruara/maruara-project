set _REALPATH=%~dp0
rem @java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Script -url "jdbc:h2:file:%_REALPATH%/db/test" -user "sa" -script "%_REALPATH%/backup.txt"
rem @java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Script -url jdbc:h2:test -user sa -script "%_REALPATH%/backup.txt"
rem @java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Script -url jdbc:h2:test -user sa -script backup.zip -options compression zip
@java -Xmx512M -cp ./bin/h2*.jar org.h2.tools.Script -url jdbc:h2:tcp://localhost/./test -user sa -script backup.zip -options compression zip