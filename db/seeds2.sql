INSERT INTO customers (cust_email , cust_name, cust_password, cust_logo, createdAt, UpdatedAt)
VALUES ("chipotae@gmail.com", "Chip-O-Tae", "password", "/assets/img/Chipotae.png", NOW(), NOW()), ("slizbethellis@gmail.com", "Hugglebeast Industries", "password", "/assets/img/bobcat.png", NOW(), NOW());

INSERT INTO adventures (CustomerId, adventure_verbiage1, adventure_verbiage2, adventure_verbiage3, adventure_image1, adventure_image2, createdAt, UpdatedAt)
VALUES (1, "Word1", "Word2", "Word3", "/assets/img/chipotae_img1.png", "/assets/img/chipotae_img2.png", NOW(), NOW()), (2, "blah", "blah", "blah", "/assets/img/creek.png", "/assets/img/forest2.png", NOW(), NOW());