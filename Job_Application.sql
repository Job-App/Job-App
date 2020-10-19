Drop database jobApps;
create database jobApps;
drop table applications;
create table applications(
id				int unsigned NOT NULL auto_increment, #int unsigned = large, positive integer numbers, auto_increment = new id for each entry
title			varchar(255),
deadline 		date,
applied 		varchar(3),
date_applied 	date,
company			varchar(255),
link			varchar(255),		
primary key (id)
);
#alter table applications add deadline date after id;
#alter table applications add applied varchar(2) after title;
#alter table applications add date_applied date after applied;
#alter table applications add primary key (id);
show tables;
explain applications;
select * from applications;
insert into applications (title, deadline, applied, company) values ("Fry Cook", "2020-10-12","No","Krusty Kraby"); #INSERT INFO
update applications set company = "Krusty Krab" where id = 1;