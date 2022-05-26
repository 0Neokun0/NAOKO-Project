# Building a basic CRUD (Create, Read, Update, Delete)
    App functionality:

    Create a new student
    Update an existing student
    Show students list
    Delete a student

## Rest API
    GET
    POST
    PUT
    Delete

## Create Application and installing modules
    npx create-react-app react-crud 
    cd react-crud
    npm start

## Installing External modules
    React-Bootstrap
    * For making an excellent choice for UI.
    React-Router-Dom
    * React Router DOM enables to implement routing in a React App.
    Axios
    * Promise base HTTP Client and use for network request
    Formik
    * Library to build form in React.
    Yup
    * Yup is a JavaScript schema builder for form validation.

    To install, run the following code on the terminal.
        npm i react-bootstrap@next bootstrap@5.1.0 react-router-dom axios formik yup

## Manage Student data
    Heading over to src folder, make a folder and name it Components and within that directory create the following components.

    StudentForm.js – Reusable Student form
    create-student.component.js – Responsible for create new student 
    edit-student.component.js – Responsible for update student data
    student-list.component.js – Responsible for display all student
    StudentTableRow.js  – Responsible for display a single student 