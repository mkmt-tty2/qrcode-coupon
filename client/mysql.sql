CREATE TABLE `store` (
  `code` varchar(20)   NOT NULL,
  `name` varchar(30)   NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `name` (`name`)
)

CREATE TABLE `coupon` (
  `event_apikey` varchar(30)   NOT NULL,
  `user_hash` varchar(30)   NOT NULL,
  `use_number` int  NOT NULL,
  `use_time` DATETIME  NULL,
  `store_code` varchar(20)   NULL
)
drop TABLE `coupon`

insert into user(name, status) values('Katsuomi', 'student');

insert into coupon(event_apikey, user_hash, use_number, use_time, store_code) values('event_apikey', 'user_hash', 1, null, null);
insert into coupon(event_apikey, user_hash, use_number, use_time, store_code) values('event_apikey', 'user_hash', 2, null, null);
insert into coupon(event_apikey, user_hash, use_number, use_time, store_code) values('event_apikey', 'user_hash', 3, null, null);