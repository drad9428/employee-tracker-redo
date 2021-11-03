INSERT INTO department (dept_name)
VALUES 
("Product/Dev"),
("Marketing"),
("Legal"),
("Human Resources"),
("Sales");

INSERT INTO role (title, salary, department_id)
VALUES
("Sales Lead", 100000, 5),
("Sales Representative", 75000, 5),
("Sales Manager", 175000, 5),
("Dev Manager", 175000, 1),
("Senior Developer", 130000,1),
("Junior Developer", 100000, 1),
("Product Manager", 125000, 1),
("Social Media Specialist", 75000, 2),
("Market Analyst", 115000, 2),
("Maketing Manager", 175000, 2),
("Legal Counsel", 200000, 3),
("Legal Manager", 250000, 3),
("HR Manager", 150000, 4),
("HR Specialist", 95000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Justin", "McElroy", 3, null),
("Travis", "McElroy", 2, 1),
("Magnus", "Burnsides", 1, 1),
("Clint", "McElroy", 4, null),
("Merle", "Highchurch", 5, 4),
("Angus", "McDonald", 6, 4),
("Barry", "Bluejeans", 7, null),
("Carey", "Fangbattle", 10, null),
("Captain", "Bain", 8, 7),
("Lucas", "Miller", 9, 7),
("Maureen", "Miller", 12, null),
("Joaquin", "Terrero", 11, 11),
("Artemis", "Sterling", 13, null),
("Julia", "Burnsides", 14, 13);