# Job Hunt API Documentation

## Available APIs
- [User  APIs](#user-apis)
  - [1. Register User](#1-register-user)
  - [2. Login User](#2-login-user)
  - [3. User Logout](#3-user-logout)
  - [4. Update User](#4-update-user)
- [Company APIs](#company-apis)
  - [1. Register Company](#1-register-company)
  - [2. Get Company Associated with Login User](#2-get-company-associated-with-login-user)
  - [3. Get Company by ID](#3-get-company-by-id)
  - [4. Update Company](#4-update-company)
- [Job APIs](#job-apis)
  - [1. Post a Job](#1-post-a-job)
  - [2. Get All Jobs](#2-get-all-jobs)
  - [3. Get Admin/User Jobs](#3-get-adminuser-jobs)
  - [4. Get Job by ID](#4-get-job-by-id)
- [Application APIs](#application-apis)
  - [1. Apply for Job](#1-apply-for-job)
  - [2. Get Applied Jobs](#2-get-applied-jobs)
  - [3. Get Applicants](#3-get-applicants)
  - [4. Update Application Status](#4-update-application-status)

---

## User APIs

### 1. Register User
- **Endpoint:** `POST http://localhost:6060/api/v1/user/register`
- **Description:** Register a new user in the job hunt system.
- **Request Body:**
    ```json
    {
        "fullName": "sf",
        "email": "sf@gmail.com",
        "phone": "7769",
        "role": "recruiter",
        "password": "123"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/user/register' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "fullName": "sf",
        "email": "sf@gmail.com",
        "phone": "7769",
        "role": "recruiter",
        "password": "123"
    }'
    ```

### 2. Login User
- **Endpoint:** `POST http://localhost:6060/api/v1/user/login`
- **Description:** Authenticate a user and return a session token.
- **Request Body:**
    ```json
    {
        "email": "sf@gmail.com",
        "role": "recruiter",
        "password": "123"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/user/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "sf@gmail.com",
        "role": "recruiter",
        "password": "123"
    }'
    ```

### 3. User Logout
- **Endpoint:** `GET http://localhost:6060/api/v1/user/logout`
- **Description:** Log out the currently authenticated user and invalidate the session token.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/user/logout'
    ```

### 4. Update User
- **Endpoint:** `PUT http://localhost:6060/api/v1/user/update`
- **Description:** Update the profile information of the logged-in user.
- **Request Body:**
    ```json
    {
        "fullName": "ssff"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'http://localhost:6060/api/v1/user/update' \
    --header 'Content-Type: application/json' \
    --data '{
        "fullName": "ssff"
    }'
    ```

---

## Company APIs

### 1. Register Company
- **Endpoint:** `POST http://localhost:6060/api/v1/company/register`
- **Description:** Register a new company in the job hunt system.
- **Request Body:**
    ```json
    {
        "companyName": "SF World"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/company/register' \
    --header 'Content-Type: application/json' \
    --data '{
        "companyName": "SF World"
    }'
    ```

### 2. Get Company Associated with Login User
- **Endpoint:** `GET http://localhost:6060/api/v1/company/get`
- **Description:** Retrieve the company details associated with the currently logged-in user.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/company/get'
    ```

### 3. Get Company by ID
- **Endpoint:** `GET http://localhost:6060/api/v1/company/get/{companyId}`
- **Description:** Retrieve details of a specific company by its ID.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/company/get/66b7169576604182c8e062fa'
    ```

### 4. Update Company
- **Endpoint:** `PUT http://localhost:6060/api/v1/company/update/{companyId}`
- **Description:** Update the details of an existing company.
- **Request Body:**
    ```json
    {
        "companyName": "Postman"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'http://localhost:6060/api/v1/company/update/66b715c976604182c8e062f5' \
    --header 'Content-Type: application/json' \
    --data '{
        "companyName": "Postman"
    }'
    ```

---

## Job APIs

### 1. Post a Job
- **Endpoint:** `POST http://localhost:6060/api/v1/job/post`
- **Description:** Create a new job listing in the system.
- **Request Body:**
    ```json
    {
        "title": "Front-end",
        "description": "Front developer having 2 years of experience",
        "requirements": "API testing, Postman, Git",
        "salary": "12",
        "experience": "1 year",
        "location": "Hyderabad",
        "jobType": "full-time",
        "position": "12",
        "companyId": "66b715c976604182c8e062f5"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/post' \
    --header 'Content-Type: application/json' \
    --data '{
        "title": "Front-end",
        "description": "Front developer having 2 years of experience",
        "requirements": "API testing, Postman, Git",
        "salary": "12",
        "experience": "1 year",
        "location": "Hyderabad",
        "jobType": "full-time",
        "position": "12",
        "companyId": "66b715c976604182c8e062f5"
    }'
    ```

### 2. Get All Jobs
- **Endpoint:** `GET http://localhost:6060/api/v1/job/getAllJobs`
- **Description:** Retrieve a list of all job postings in the system.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/getAllJobs'
    ```

### 3. Get Admin/User Jobs
- **Endpoint:** `GET http://localhost:6060/api/v1/job/getAdminJobs`
- **Description:** Retrieve job postings associated with the admin or the logged-in user.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/getAdminJobs'
    ```

### 4. Get Job by ID
- **Endpoint:** `GET http://localhost:6060/api/v1/job/get/{jobId}`
- **Description:** Retrieve details of a specific job by its ID.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/get/66b7ae3b3fce210e5a9987fc'
    ```

---

## Application APIs

### 1. Apply for Job
- **Endpoint:** `POST http://localhost:6060/api/v1/application/apply/{jobId}`
- **Description:** Submit an application for a specific job.
- **CURL Example:**
    ```bash
    curl --location --request POST 'http://localhost:6060/api/v1/application/apply/66b7ae3b3fce210e5a9987fc'
    ```

### 2. Get Applied Jobs
- **Endpoint:** `GET http://localhost:6060/api/v1/application/applied/get`
- **Description:** Retrieve a list of jobs that the user has applied for.
- **CURL Example:**
    ```bash
    ```bash
    curl --location 'http://localhost:6060/api/v1/application/applied/get'
    ```

### 3. Get Applicants
- **Endpoint:** `GET http://localhost:6060/api/v1/application/{jobId}/applicants`
- **Description:** Retrieve a list of applicants for a specific job.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/application/66d1be4f21764cd9ebbdf117/applicants'
    ```

### 4. Update Application Status
- **Endpoint:** `POST http://localhost:6060/api/v1/application/status/{applicationId}/update`
- **Description:** Update the status of a specific job application.
- **Request Body:**
    ```json
    {
        "status": "accepted"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/application/status/66d1bed88beb71fb163452e5/update' \
    --header 'Content-Type: application/json' \
    --data '{
        "status": "accepted"
    }'
    ```