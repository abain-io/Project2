// seed-company-contact.sql to provide some test data to the intermediate table

USE jobHunt_db;

INSERT INTO companyContact (company_id, contact_id)
VALUES  (11,5),
        (11,2),
        (6,1),
        (6,2),
        (6,3),
        (6,4),
        (3,1),
        (3,2),
        (3,5);


/* 
HON      11
NATI     6
EMR       3

Katie   1
Don     2
Richard 3
Taylor  4
Peter   5
*/