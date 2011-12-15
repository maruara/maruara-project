-- 테이블 생성
CREATE TABLE BOARD(
   NO         NUMBER PRIMARY KEY
 , TITLE      VARCHAR2 (100)
 , CONTENTS   VARCHAR2 (4000)
 , WRITER     VARCHAR2 (20)
 , REGDATE    DATE DEFAULT SYSDATE
 , HIT        NUMBER DEFAULT 0
 , GRP        NUMBER
 , SEQ        NUMBER DEFAULT 1
 , LVL        NUMBER DEFAULT 0
);


-- 시퀀스 생성
CREATE SEQUENCE BOARD_NO_SEQ
   START WITH 1
   INCREMENT BY 1;


-- 새글 작성
INSERT INTO BOARD (NO
                 , TITLE
                 , CONTENTS
                 , WRITER
                 , GRP)
     VALUES (BOARD_NO_SEQ.NEXTVAL
           , '[제목]'
           , '[내용]'
           , '[작성자]'
           , BOARD_NO_SEQ.CURRVAL);


-- 답글 작성
UPDATE BOARD
   SET SEQ = SEQ + 1
 WHERE GRP = '[게시물번호]'
   AND SEQ > (SELECT SEQ
                FROM BOARD
               WHERE NO = '[게시물번호]');

INSERT INTO BOARD (NO
                 , TITLE
                 , CONTENTS
                 , WRITER
                 , GRP
                 , SEQ
                 , LVL)
     VALUES (BOARD_NO_SEQ.NEXTVAL
           , '[답글제목]'
           , '[답글내용]'
           , '[작성자]'
           , (SELECT GRP
                FROM BOARD
               WHERE NO = '[게시물번호]')
           , (SELECT SEQ
                FROM BOARD
               WHERE NO = '[게시물번호]')
             + 1
           , (SELECT LVL
                FROM BOARD
               WHERE NO = '[게시물번호]')
             + 1);


-- 게시물 목록
  SELECT *
    FROM BOARD
ORDER BY GRP DESC, SEQ;
