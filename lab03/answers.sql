select * from users;  ---- EXERCISE 1
SELECT id, first_name, last_name FROM users;  ---- EXERCISE 2
SELECT id, first_name, last_name FROM users order by last_name asc  ---- EXERCISE 3
SELECT id, user_id, image_url FROM posts where user_id=26  ---- EXERCISE 4
SELECT id, user_id, image_url FROM posts where user_id=26 or user_id=12  ---- EXERCISE 5
select count(*) from posts  ---- EXERCISE 6
select c.user_id, count(post_id) from comments c group by user_id
order by count(post_id) desc;  ---- EXERCISE 7

SELECT p.id, p.user_id, p.image_url, u.username, u.first_name, u.last_name FROM posts p 
INNER JOIN users u on u.id = p.user_id where user_id=26 or user_id=12  ---- EXERCISE 8

SELECT p.id, p.pub_date, f.following_id FROM posts p 
INNER JOIN following f on p.user_id = f.user_id
where p.user_id in (select following_id from following where user_id=26)
order by f.following_id  ---- EXERCISE 9

---- EXERCISE 11

insert into bookmarks (user_id,post_id) values (26,219)
insert into bookmarks (user_id,post_id) values (26,220)
insert into bookmarks (user_id,post_id) values (26,221)

---- EXERCISE 12

delete from bookmarks where user_id = 26 and post_id=219
delete from bookmarks where user_id = 26 and post_id=220
delete from bookmarks where user_id = 26 and post_id=221

update users set email ='cyoung2022@gmail.com' where id=26  ---- EXERCISE 13


