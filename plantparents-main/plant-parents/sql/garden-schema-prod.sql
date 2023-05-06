drop database if exists community_garden;
create database community_garden;
use community_garden;

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
        ('Cherry Abbey', 1),
        ('Greendale', 1),
        ('Mocking Mulberry', 1),
        ('The Grove', 1),
        ('Cypress Grove', 2),
        ('Walnut Butte', 2),
        ('Bay View', 2),
        ('Hunter Prairie', 2),
        ('Bear Prospect', 3),
        ('Sweet Dunes', 3),
        ('Birch View', 3),
        ('Orchards', 3);
        
	insert into plant (date_planted, harvest_date, date_last_watered, is_watered, species_id, plot_id) values 
		('2023-04-01', '2023-08-31', '2023-04-05', false, 1, 1),
		('2023-04-02', '2023-04-07', '2023-04-07', false, 3, 1),
		('2023-04-02', '2023-10-31', '2023-04-03', true, 4, 1),
		('2023-04-03', null, '2023-04-04', false, 5, 2),
		('2023-04-03', null, '2023-04-04', true, 6, 2),
		('2023-04-04', '2023-09-15', '2023-04-05', false, 7, 2),
		('2023-04-04', '2023-09-15', '2023-04-05', true, 8, 2),
		('2023-04-05', '2023-08-31', '2023-04-05', false, 9, 2),
		('2023-04-05', '2023-08-31', '2023-04-05', true, 10, 3),
        ('2023-03-25', '2023-08-30', '2023-04-01', true, 2, 3),
		('2023-03-26', '2023-08-31', '2023-04-02', false, 3, 3),
		('2023-03-27', '2023-09-01', '2023-04-03', true, 4, 4),
		('2023-03-28', '2023-09-02', '2023-04-04', false, 5, 4),
		('2023-03-29', '2023-09-03', '2023-04-05', true, 6, 5),
		('2023-03-30', '2023-09-04', '2023-04-06', false, 7, 5),
		('2023-03-31', '2023-09-05', '2023-04-07', true, 8, 5),
        ('2023-03-15', '2023-08-15', '2023-04-01', true, 5, 5),
		('2023-03-22', '2023-08-22', '2023-04-02', true, 6, 6),
		('2023-03-25', '2023-09-25', '2023-04-03', true, 7, 6),
		('2023-03-27', '2023-09-27', '2023-04-04', true, 8, 6),
		('2023-04-01', '2023-09-30', '2023-04-05', true, 1, 7),
		('2023-04-02', '2023-09-02', '2023-04-06', true, 2, 7),
		('2023-04-03', '2023-10-31', '2023-04-07', true, 4, 7),
		('2023-04-04', '2023-10-04', '2023-04-08', true, 3, 8),
		('2023-04-05', '2023-10-05', '2023-04-09', true, 10, 8),
		('2023-04-06', '2023-09-06', '2023-04-10', true, 9, 9),
		('2023-04-07', '2023-10-07', '2023-04-11', true, 12, 9),
		('2023-04-08', '2023-10-08', '2023-04-12', true, 13, 9),
        ('2023-04-01', '2023-10-31', '2023-04-03', false, 14, 10),
		('2023-04-02', '2023-08-31', '2023-04-04', true, 16, 10),
		('2023-04-03', '2023-09-30', '2023-04-05', true, 15, 11),
		('2023-04-04', '2023-09-15', '2023-04-05', false, 19, 11),
		('2023-04-05', '2023-08-31', '2023-04-05', true, 21, 12),
		('2023-04-01', '2023-10-31', '2023-04-03', false, 7, 12),
		('2023-04-02', '2023-09-30', '2023-04-05', true, 22, 13),
		('2023-04-03', '2023-08-31', '2023-04-04', false, 23, 13);
    
    insert into gardener (first_name, last_name) values 
		('Elijah', 'Kolb'),
        ('Kalee', 'Bain'),
        ('Xander', 'Stewart'),
        ('Jack', 'Black'),
        ('Shanel', 'Hickman Whitmore'),
        ('Corbin', 'March'),
        ('Dillon', 'Tuck'),
        ('Lenore', 'Kelly'),
        ('Aysha', 'Sparks'),
        ('Danielle', 'Leslie'),
        ('Averi', 'Bean'),
        ('Dee', 'Kornbluth'),
        ('Derrick', 'Christian'),
		('Paul', 'Mitchell'),
        ('Micah', 'Harder'),
        ('Michael', 'Caldwell'),
        ('Livia', 'Throckmorton'),
        ('Mwenge', 'Maliro'),
        ('Gabrielle', 'Olson-Greiff'),
        ('Stephanie', 'Drake'),
        ('Darian', 'Cline'),
		('Landon', 'Mills'),
		('Nina', 'Sanchez'),
		('Oscar', 'Hurst'),
		('Bridget', 'Ray'),
		('Benny', 'Bridges'),
		('Kamari', 'Knox'),
		('Adelaide', 'Bass'),
		('River', 'Sampson'),
		('Finn', 'Phelps'),
		('Jocelyn', 'Benton'),
		('Daxton', 'Tanner'),
		('Eli', 'Rice'),
		('Cameron', 'Blackwell'),
		('Jessa', 'Lynch'),
		('Harrison', 'McLean'),
		('Sophie', 'Boyer'),
		('Rayan', 'Dominguez'),
		('Trenton', 'Vega'),
		('Kaliyah', 'Terrell'),
		('Moses', 'Parks'),
		('Eileen', 'Lam'),
		('Brynn', 'Gaines'),
		('Rhett', 'Wolfe'),
		('Alex', 'Kaufman'),
		('Caroline', 'Larsen'),
		('Haley', 'Dunlap'),
		('Eliza', 'McPherson'),
		('Noemi', 'Aguirre');
        
	
	insert into plot_gardener (plot_id, gardener_id) values 
		(1, 1),
        (1, 2),
        (1, 3),
        (1, 4),
        (1, 5),
		(2, 6),
        (2, 7),
        (2, 8),
        (3, 9),
        (3, 10),
        (3, 11),
        (4, 12),
        (4, 13),
        (4, 14),
        (5, 15),
        (5, 16),
        (6, 17),
        (6, 18),
        (7, 19),
        (7, 20),
        (7, 21),
        (8, 22),
        (8, 23),
        (8, 24),
        (9, 25),
        (9, 26),
        (10, 27),
        (10, 28),
        (10, 29),
        (11, 30),
        (11, 31),
        (11, 32),
        (12, 33),
        (12, 34),
        (12, 35),
        (13, 36),
        (13, 37),
        (13, 38),
        (13, 39),
        (13, 40);


end //
delimiter ;

set sql_safe_updates = 0;
call set_known_good_state();
set sql_safe_updates = 1;
