CREATE SCHEMA mysql;

CREATE TABLE mysql.blocked_users (
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	user_name            varchar(100)  NOT NULL    ,
	blocked_by           varchar(100)      ,
	blocked_at           datetime   DEFAULT CURRENT_TIMESTAMP
 );

CREATE TABLE mysql.keywords (
	id                   int UNSIGNED NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	word                 varchar(80) NOT NULL     ,
	added_at             datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP   ,
	added_by             varchar(200)  NOT NULL,
	word_topic           varchar(200)
 );

CREATE TABLE mysql.users (
	id                   int UNSIGNED NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	email                varchar(320)      ,
	password             varchar(255)      ,
	created_at           datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP   ,
	last_login           datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP
 );

CREATE TABLE mysql.comments (
    id                   int UNSIGNED NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	keyword              varchar(320)      ,
	added_by             varchar(255)      ,
	added_at             datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP   ,
	word_topic           varchar(200),
	author               varchar(200)
)

INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 1, 'dupa', '2020-04-20 18:39:44', '', 'polska' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 2, 'szmata', '2020-05-03 18:11:08', '1', 'usa' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 3, 'jebac', '2020-04-20 18:39:44', '', 'wybory' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 4, 'chuj', '2020-05-03 18:11:08', '1', 'polityka' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 5, 'kurwa', '2020-04-20 18:39:44', '', 'polityka' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 6, 'szmata', '2020-05-03 18:11:08', '1', 'wybory' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 7, 'jebac' '2020-04-20 18:39:44', '', 'polityka' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 8, 'jebac', '2020-05-03 18:11:08', '1', 'polityka' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 9, 'jebac' '2020-04-20 18:39:44', '', 'technologia' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 10, 'jebac', '2020-05-03 18:11:08', '1', 'usa' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 11, 'jebac', '2020-04-20 18:39:44', '', 'usa' );
INSERT INTO mysql.keywords( id, word, added_at, added_by, word_topic ) VALUES ( 12, 'jebac', '2020-05-03 18:11:08', '1', 'polityka' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 1, 'wojkal123@gowno.pl', null, '2020-04-11 21:42:52', '2020-04-11 21:42:52' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 6, 'testuser@test.pl', null, '2020-04-13 14:00:32', '2020-04-13 14:00:32' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 7, 'testuser@tes2t.pl', null, '2020-04-14 22:57:36', '2020-04-14 22:57:36' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 8, 'testuse2r@tes2t.pl', null, '2020-04-14 23:02:44', '2020-04-14 23:02:44' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 9, 'testusernew@tes2t.pl', '$2b$12$MvQ8O2k17cvA.B5f25DX4ubZYb268ecGgz62N0KOVuyNacHPj1mE.', '2020-04-18 13:37:02', '2020-04-18 13:37:02' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 10, 'testuserne7@tes2t.pl', '$2b$12$zNCgA96eVlDXkOH.nDKqSumrrUagPT9JDDvup5zRdpc8/pIuSs0Pq', '2020-04-18 13:38:00', '2020-04-18 13:38:00' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 11, 'test10@test.pl', '$2b$12$EJqXrjMxYsgtMLUWIEVUHeETcVl8KIJqi5NoahB2axoC0LD1e5VPu', '2020-04-18 14:09:16', '2020-04-18 14:09:16' );
INSERT INTO mysql.users( id, email, password, created_at, last_login ) VALUES ( 12, 'username@email.pl', '$2b$12$h8lsc0dElT0r7.rhYHKVlOWPPpqY8r4znYUge.BFOOiYrZZgytZ6a', '2020-04-20 18:10:16', '2020-04-20 18:10:16' );