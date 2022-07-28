USE tracker_db
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
       ("potter", 9000, 6),
       ("director", 3000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Karen", "Martinez", 5 , 3),
       ("Kiara", "Montero", 6 , 1),
       ("Maria", "Castillo", 9 , 2);
        
