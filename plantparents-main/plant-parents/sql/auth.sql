use community_garden;

drop table if exists app_user_role;
drop table if exists app_role;
drop table if exists app_user;

create table app_user (
	app_user_id int primary key auto_increment,
    username varchar(256) not null unique,
    password_hash varchar(1024) not null
);

create table app_role (
	app_role_id int primary key auto_increment,
    `name` varchar(25) not null
);

create table app_user_role (
	app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
		primary key (app_user_id, app_role_id),
	constraint fk_app_user_role_app_user_id
		foreign key (app_user_id)
		references app_user(app_user_id),
	constraint fk_app_user_role_app_role_id
		foreign key (app_role_id)
		references app_role(app_role_id)
);

-- data
insert into app_role (`name`) values
	('USER'),
    ('ADMIN');
    
insert into app_user (username, password_hash) values
	('user', '$2a$10$h7HnUxWRQ5BjTWLQTJVYCuHN7FuohoP4fFIpnRez1SXfg/dzEXQMC'), -- password "user"
    ('admin', '$2a$10$CmLnBhLngb/DV5MY6q6r7.N8F7rSHYff1xOcB9GKbywwNh/INqN/O'); -- password "admin"
    
insert into app_user_role(app_user_id, app_role_id) values
	(1, 1),
    (2, 2);
    