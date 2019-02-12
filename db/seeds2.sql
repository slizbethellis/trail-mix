INSERT INTO customers (cust_email , cust_name, cust_logo, createdAt, UpdatedAt)
VALUES ("chipotae@gmail.com", "Chip-O-Tae", "/assets/img/Chipotae.png", NOW(), NOW()), ("slizbethellis@gmail.com", "Hugglebeast Industries", "/assets/img/bobcat.png", NOW(), NOW());

INSERT INTO adventures (CustomerId, adventure_name, adventure_verbiage1, adventure_verbiage2, adventure_verbiage3, adventure_verbiage4, adventure_verbiage5, createdAt, UpdatedAt)
VALUES (1, "McBurger", "Frowny Meal", "fries", "shake", "chicken nuggets", "burger", NOW(), NOW()), (2, "Meow Meow", "blah", "blah", "blah", "blah", "blah", NOW(), NOW());