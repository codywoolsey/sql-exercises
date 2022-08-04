import { faker } from '@faker-js/faker';
import knex from 'knex';

const client = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'employee_data'
    }
});

const NUM_LOCATIONS = 50;
const NUM_DEPARTMENTS = 20;
const NUM_EMPLOYEES = 1000;

async function createLocations() {
    for (let i = 1; i <= NUM_LOCATIONS; i++) {
        const name = faker.company.companyName();
        const state = faker.address.stateAbbr();
        const active = faker.helpers.arrayElement([1, 0]);

        await client('locations').insert({name: name, state_code: state, active: active});
    }
}

async function createDepartments() {
    for (let i = 1; i <= NUM_DEPARTMENTS; i++) {
        const name = faker.company.companyName();
        const active = faker.helpers.arrayElement([1, 0]);

        await client('departments').insert({ name: name, active: active });
    }
}

async function createEmployees() {
    for (let i = 1; i <= NUM_EMPLOYEES; i++) {
        const departmentId = faker.datatype.number({min: 1, max: NUM_DEPARTMENTS});
        const name = faker.name.findName();
        const birthday = faker.date.birthdate();
        const hireDate = faker.date.past(10);
        const currentlyEmployed = faker.helpers.arrayElement([1, 0]);

        const employeeId = (await client('employees').insert({
            department_id: departmentId,
            name: name,
            birthday: birthday,
            hire_date: hireDate,
            currently_employed: currentlyEmployed
        }))[0];
        console.log(employeeId);

        const numLocations = faker.datatype.number({min: 0, max: 3});
        for (let j = 1; j <= numLocations; j++) {
            const locationId = faker.datatype.number({min: 1, max: NUM_LOCATIONS});

            await client('employee_locations').insert({employee_id: employeeId, location_id: locationId});
        }
    }
}

async function seedData() {
    await createLocations();
    await createDepartments();
    await createEmployees();
}

seedData().then(() => console.log('Done seeding.'));