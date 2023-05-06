drop database if exists community_garden_test;
create database community_garden_test;
use community_garden_test;

create table community (
	community_id int primary key auto_increment, 
    name varchar(256) not null
);

create table plot (
	plot_id int primary key auto_increment,
    name varchar(256) not null,
	community_id int not null,
    constraint fk_plot_community_id
		foreign key (community_id)
        references community (community_id)
);

create table gardener (
	gardener_id int primary key auto_increment,
    first_name varchar(256) not null,
    last_name varchar(256) not null
);

create table species (
	species_id int primary key auto_increment,
    common_name varchar(256) not null,
    scientific_name varchar(512) null,
    cycle varchar(128) null,
    watering_frequency varchar(128) not null
);

create table plot_gardener (
	plot_id int not null,
	gardener_id int not null,
    constraint pk_plot_gardener
		primary key (plot_id, gardener_id),
	constraint fk_plot_gardener_plot_id
		foreign key (plot_id) 
        references plot(plot_id),
	constraint fk_plot_gardener_gardener_id
		foreign key (gardener_id) 
        references gardener(gardener_id)
);

create table plant (
	plant_id int primary key auto_increment,
	date_planted date not null,
    harvest_date date null,
    date_last_watered date not null,
    is_watered bit not null default 0,
    species_id int not null,
    plot_id int not null,
    constraint fk_plant_species_id
		foreign key (species_id)
        references species (species_id),
	constraint fk_plant_plot_id
		foreign key (plot_id)
        references plot (plot_id)
);

delimiter //
create procedure set_known_good_state()
begin
	delete from plant;
    alter table plant auto_increment = 1;
	delete from plot_gardener;
	delete from gardener;
	alter table gardener auto_increment = 1;
	delete from plot;
	alter table plot auto_increment = 1;
	delete from species;
	alter table species auto_increment = 1;
	delete from community;
	alter table community auto_increment = 1;
    
	insert into community (name) values 
		('Quality Thyme Gardening'),
        ('We Bean Gardening'),
        ('Peas & Quiet');        
        
	insert into species (common_name, scientific_name, cycle, watering_frequency) values 
		('Tomatoes', 'Solanum lycopersicum', 'Annual', 'Every other day'),
        ('Carrots', 'Daucus carota', 'Biennial', 'Once every three days'),
		('Basil', 'Ocimum basilicum', 'Annual', 'Every day'),
        ('Lettuce', 'Lactuca sativa', 'Annual', 'Twice a week'),
        ('Peppers', 'Capsicum annuum', 'Annual', 'Every other day'),
		('Cucumbers', 'Cucumis sativus', 'Annual', 'Every day'),
		('Eggplant', 'Solanum melongena', 'Annual', 'Every other day'),
		('Zucchini', 'Cucurbita pepo', 'Annual', 'Every day'),
		('Green Beans', 'Phaseolus vulgaris', 'Annual', 'Every other day'),
		('Beets', 'Beta vulgaris', 'Biennial', 'Once every three days'),
		('Radishes', 'Raphanus sativus', 'Annual', 'Every day'),
		('Spinach', 'Spinacia oleracea', 'Annual', 'Twice a week'),
		('Kale', 'Brassica oleracea', 'Annual', 'Twice a week'),
		('Asparagus', 'Asparagus officinalis', 'Perennial', 'Once a week'),
		('Blackberries', 'Rubus fruticosus', 'Perennial', 'Every other day'),
		('Blueberries', 'Vaccinium corymbosum', 'Perennial', 'Every day'),
		('Strawberries', 'Fragaria × ananassa', 'Perennial', 'Every day'),
		('Broccoli', 'Brassica oleracea var. italica', 'Annual', 'Twice a week'),
		('Brussel Sprouts', 'Brassica oleracea var. gemmifera', 'Annual', 'Twice a week'),
		('Peaches', 'Prunus persica', 'Perennial', 'Once a week'),
		('Peas', 'Pisum sativum', 'Annual', 'Every other day'),
		('Bell Peppers', 'Capsicum annuum', 'Annual', 'Every other day'),
		('Potatoes', 'Solanum tuberosum', 'Annual', 'Once a week');

	insert into plot (name, community_id) values 
		('Shorewood', 1),
        ('Bay View', 2),
        ('Greendale', 1);
    
    insert into gardener (first_name, last_name) values 
		('Elijah', 'Kolb'),
        ('Kalee', 'Bain'),
        ('Darian', 'Cline');
	
	insert into plot_gardener (plot_id, gardener_id) values 
		(1, 1),
        (1, 2);

	insert into plant (date_planted, harvest_date, date_last_watered, is_watered, species_id, plot_id) values 
		('2023-04-01', '2023-08-31', '2023-04-05', false, 1, 1),
        ('2023-04-01', '2023-09-30', '2023-04-05', true, 2, 1),
		('2023-04-02', '2023-07-31', '2023-04-03', false, 3, 1),
		('2023-04-02', '2023-10-31', '2023-04-03', true, 4, 1),
		('2023-04-03', null, '2023-04-04', false, 5, 2),
		('2023-04-03', null, '2023-04-04', true, 6, 2),
		('2023-04-04', '2023-09-15', '2023-04-05', false, 7, 2),
		('2023-04-04', '2023-09-15', '2023-04-05', true, 8, 2),
		('2023-04-05', '2023-08-31', '2023-04-05', false, 9, 2),
		('2023-04-05', '2023-08-31', '2023-04-05', true, 10, 2);

end //
delimiter ;

set sql_safe_updates = 0;
call set_known_good_state();
set sql_safe_updates = 1;
