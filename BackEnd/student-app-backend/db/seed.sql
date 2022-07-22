\c students_app;

INSERT INTO students (firstName, lastName, company, skill, pic, city, email) VALUES
('Ingaberg', 'Orton', 'Yadel', 'Oracle', 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg', 'Fushë-Muhurr', 'iorton0@imdb.com'),
('Laurens', 'Romanet', 'Skalith', 'Employee Handbooks', 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg', 'Krajan', 'bskitt3@aboutads.info'),
('Clarke', 'Boards', 'Avamm', 'Sports', 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg', 'Sanghan', 'cboards1@weibo.com');

INSERT INTO grades (grade, student_id) VALUES 
(78, 1),
(100, 1),
(75, 2),
(89, 2),
(88, 3),
(93, 3);

-- psql -U postgres -f db/seed.sql  