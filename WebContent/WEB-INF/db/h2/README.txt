[H2 Database 사용법]

- 파일 설명
server_start.bat : tcp 서버와 웹 콘솔 서버가 실행된다.
server_stop.bat : tcp 서버가 중지된다.
tcp_start.bat : tcp 서버가 실행된다.
tcp_stop.bat : tcp 서버가 중지된다.
web_console.bat : 웹 콘솔 서버가 실행된다.
backup.bat : database의 백업이 실행된다.
restore.bat : database의 백업한 파일의 복구가 실행된다.
h2.init.sql : H2 DB 서버에 connection이 완료됐을 경우 자동 실행되는 SQL.

- 폴더 설명
db : Database 파일이 존재한다.
bin : H2 Database의 관련된 library.
service : H2 Database를 윈도우 서비스 항목에 포함하거나 제거할 수 있는 bat 파일.
docs : H2 Database 설명서.
src : H2 Database 소스.