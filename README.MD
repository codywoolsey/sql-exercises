# SQL Practice

## Requirements
- [Docker Desktop](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)
- [Node JS LTS](https://nodejs.org/en/download/)
- [DBeaver](https://dbeaver.io/)

## Setup
1. Open Powershell, navigate to this project directory.
2. Run `docker-compose up -d`
3. Run `npm ci`
4. Connect to the database using DBeaver. The username is "root", password is "password", and the port is "3306".
5. Copy the contents of `schema.sql`, and paste it into a SQL editor in DBeaver.
6. Execute the SQL script.
7. Return to powershell, and run `node .`
8. Check the database tables in DBeaver to ensure the tables were populated with data.

## Challenges
1. Generate a set of currently employed employees sorted by their hire date in ascending order.
2. Generate a set of non currently employed employees with hire dates more than five years in the past.
3. Generate a set of unique department names in alphabetical order.
4. Generate a set of the IDs of employees who are associated with an inactive department.
5. Associate the employee with ID 777 to the location with ID 20.
6. Delete all location associations for the employee with ID 8.
7. Change the employee with ID 42 to be associated with the department with ID 1.
8. Fire all employees with a birth date more than 22 years in the past.
9. Generate a set of employee IDs who are not associated with any locations.
10. Generate a set of location names for the employee with ID 562 (pick a different employee if this one doesn't happen to be associated with any locations) sorted in descending order.