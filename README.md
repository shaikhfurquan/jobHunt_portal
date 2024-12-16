# jobHunt_portal


## API Endpoints Overview

### User APIs
1. **Register User**: `POST /api/v1/user/register`
2. **Login User**: `POST /api/v1/user/login`
3. **User Logout**: `GET /api/v1/user/logout`
4. **Update User**: `PUT /api/v1/user/update`
5. **Delete User**: `DELETE /api/v1/user/delete/{userId}`

### Company APIs
1. **Register Company**: `POST /api/v1/company/register`
2. **Get Company Associated with Login User**: `GET /api/v1/company/get`
3. **Get Specific Company by ID**: `GET /api/v1/company/get/{companyId}`
4. **Update Company**: `PUT /api/v1/company/update/{companyId}`
5. **Delete Company**: `DELETE /api/v1/company/delete/{companyId}`

### Jobs APIs
1. **Post a Job**: `POST /api/v1/job/post`
2. **Get All Jobs**: `GET /api/v1/job/getAllJobs`
3. **Get Admin/User Jobs**: `GET /api/v1/job/getAdminJobs`
4. **Get Job by ID**: `GET /api/v1/job/get/{jobId}`

### Application APIs
1. **Apply for a Job**: `POST /api/v1/application/apply/{jobId}`
2. **Get Applied Jobs**: `GET /api/v1/application/applied/get`
3. **Get Applicants for a Job**: `GET /api/v1/application/{jobId}/applicants`
4. **Update Application Status**: `POST /api/v1/application/status/{applicationId}/update`

---


# User APIs

This section provides details about the User APIs for the Advanced Social Media application. Below are the available endpoints for user management.

### 1. Register User
- **Endpoint:** `POST /api/v1/user/register`
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
- **Endpoint:** `POST /api/v1/user/login`
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
- **Endpoint:** `GET /api/v1/user/logout`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/user/logout'
    ```

### 4. Update User
- **Endpoint:** `PUT /api/v1/user/update`
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
    --header 'Cookie: YOUR_TOKEN_HERE' \
    --data '{
        "fullName": "ssff"
    }'
    ```

### 5. Delete User
- **Endpoint:** `DELETE /api/v1/user/delete/{userId}`
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'http://localhost:6060/api/v1/user/delete/{userId}' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

## Notes
- Replace `YOUR_TOKEN_HERE` with the actual token obtained during login.
- Ensure that the server is running on `localhost:6060` or adjust the URL accordingly if hosted elsewhere.

Feel free to reach out for any questions or further clarifications regarding the API usage!




# Company APIs

This section provides details about the Company APIs for the Advanced Social Media application. Below are the available endpoints for company management.

### 1. Register Company
- **Endpoint:** `POST /api/v1/company/register`
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
    --header 'Cookie: YOUR_TOKEN_HERE' \
    --data '{
        "companyName": "SF World"
    }'
    ```

### 2. Get Company Associated with Login User
- **Endpoint:** `GET /api/v1/company/get`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/company/get' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 3. Get Specific Company by ID
- **Endpoint:** `GET /api/v1/company/get/{companyId}`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/company/get/66b7169576604182c8e062fa' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 4. Update Company
- **Endpoint:** `PUT /api/v1/company/update/{companyId}`
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
    --header 'Cookie: YOUR_TOKEN_HERE' \
    --data '{
        "companyName": "Postman"
    }'
    ```

### 5. Delete Company
- **Endpoint:** `DELETE /api/v1/company/delete/{companyId}`
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'http://localhost:6060/api/v1/company/delete/{companyId}' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

## Notes
- Replace `YOUR_TOKEN_HERE` with the actual token obtained during login.
- Ensure that the server is running on `localhost:6060` or adjust the URL accordingly if hosted elsewhere.

Feel free to reach out for any questions or further clarifications regarding the API usage!




# Jobs APIs

This section provides details about the Jobs APIs for the Advanced Social Media application. Below are the available endpoints for job management.

### 1. Post a Job
- **Endpoint:** `POST /api/v1/job/post`
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
    --header 'Cookie: YOUR_TOKEN_HERE' \
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
- **Endpoint:** `GET /api/v1/job/getAllJobs`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/getAllJobs' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 3. Get Admin/User Jobs
- **Endpoint:** `GET /api/v1/job/getAdminJobs`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/getAdminJobs' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 4. Get Job by ID
- **Endpoint:** `GET /api/v1/job/get/{jobId}`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/job/get/66b7ae3b3fce210e5a9987fc' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

## Notes
- Replace `YOUR_TOKEN_HERE` with the actual token obtained during login.
- Ensure that the server is running on `localhost:6060` or adjust the URL accordingly if hosted elsewhere.

Feel free to reach out for any questions or further clarifications regarding the API usage!




# Application APIs

This section provides details about the Application APIs for the Advanced Social Media application. Below are the available endpoints for job application management.

### 1. Apply for a Job
- **Endpoint:** `POST /api/v1/application/apply/{jobId}`
- **CURL Example:**
    ```bash
    curl --location --request POST 'http://localhost:6060/api/v1/application/apply/66b7ae3b3fce210e5a9987fc' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 2. Get Applied Jobs
- **Endpoint:** `GET /api/v1/application/applied/get`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/application/applied/get' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 3. Get Applicants for a Job
- **Endpoint:** `GET /api/v1/application/{jobId}/applicants`
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:6060/api/v1/application/66d1be4f21764cd9ebbdf117/applicants' \
    --header 'Cookie: YOUR_TOKEN_HERE'
    ```

### 4. Update Application Status
- **Endpoint:** `POST /api/v1/application/status/{applicationId}/update`
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
    --header 'Cookie: YOUR_TOKEN_HERE' \
    --data '{
        "status": "accepted"
    }'
    ```

## Notes
- Replace `YOUR_TOKEN_HERE` with the actual token obtained during login.
- Ensure that the server is running on `localhost:6060` or adjust the URL accordingly if hosted elsewhere.

Feel free to reach out for any questions or further clarifications regarding the API usage!