# My REST API Project

## Overview
This is a simple REST API for managing customer data. The API allows for fetching, adding, editing, and deleting customer records.

## Base URL
The root endpoint of the REST API is: http://localhost:3000/api/customers

## Endpoints and Actions

### Fetch All Customers
- **Method and Endpoint:** `GET /api/customers`
- **Action:** Fetches a list of all customers.

### Fetch Customer by ID
- **Method and Endpoint:** `GET /api/customers/{id}`
- **Action:** Fetches a single customer by ID. The ID is passed as a route parameter.

### Add New Customer
- **Method and Endpoint:** `POST /api/customers`
- **Action:** Adds a new customer. The new customer's data is sent in the request body.

### Delete Customer by ID
- **Method and Endpoint:** `DELETE /api/customers/{id}`
- **Action:** Deletes a customer by ID. The ID is passed as a route parameter.

### Edit Customer by ID
- **Method and Endpoint:** `PUT /api/customers/{id}`
- **Action:** Edits an existing customer by ID. The ID is passed as a route parameter and the updated customer data is sent in the request body.

## Usage
To use this API, send HTTP requests to the specified endpoints with the appropriate method. Ensure to include customer data in the request body for POST and PUT requests in a valid JSON format.