USE tracker_db;



INSERT INTO department (name)
VALUES ("Art"), 
       ("Dance"), 
       ("Music"), 
       ("Theatre"), 
       ("Orchestra"), 
       ("Ceramics");

INSERT INTO role (title, salary, department_id)
VALUES ("manager", 4000, 1),
       ("clerk", 4000, 2),
       ("assistant", 6000, 3),
       ("dancer", 4000, 4),
       ("painter", 7000, 5),
       ("potter", 9000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Karen", "Martinez", 5),
       ("Kiara", "Montero", 2),
       ("Maria", "Castillo", 1);
        
INSERT INTO employee (manager_id)
VALUES(1),
       (2),
       (3);
