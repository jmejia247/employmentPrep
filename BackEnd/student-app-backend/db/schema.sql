DROP DATABASE IF EXISTS students_app;
CREATE DATABASE students_app;

\c students_app;

CREATE TABLE students(
    id SERIAL PRIMARY KEY, 
    firstName TEXT NOT NULL, 
    lastName TEXT NOT NULL, 
    company TEXT NOT NULL, 
    skill TEXT NOT NULL, 
    pic TEXT NOT NULL, 
    city TEXT NOT NULL, 
    email TEXT NOT NULL
);

CREATE TABLE grades(
    id SERIAL PRIMARY KEY, 
    grade varchar DEFAULT 0, 
    student_id int, 
    date DATE NOT NULL DEFAULT CURRENT_DATE, 
    FOREIGN KEY (student_id) REFERENCES students(id)
);

-- psql -U postgres -f db/schema.sql