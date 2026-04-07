# Staffle

Staffle is a full-stack Employee & Organization Management System built using the MERN stack. It supports multi-organization workflows with **Super Admin**, **Admin**, and **Employee** role-based control, task lifecycle management, and centralized organization governance.

---

# Overview

Staffle allows organizations to:

* Register and manage employees
* Assign and track tasks
* Monitor task lifecycle
* Manage organization structure
* Control access via role-based permissions
* Allow Super Admin to oversee all organizations

The application is structured with **scalable architecture**, **modular controllers**, and **Redux global state management**.

---

# Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* React Router
* Axios
* Context API (Auth Provider)
* Custom Hooks Architecture

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Role & Permission Middleware

---

# Roles

### Super Admin

* View all organizations
* Approve / Reject organizations
* Enter organization as Admin
* Manage admins/employees
* View all tasks
* Revoke / Reactivate organizations

### Admin

* Add employees
* Create tasks
* Assign tasks
* Manage employees
* Track task status
* Update organization details

### Employee

* Accept / Reject tasks
* Mark task completed / failed
* View assigned tasks
* Update profile

---

# Core Features

## Organization Flow

1. Create Organization
2. Admin auto-created
3. Add minimum 2 employees
4. Submit for approval
5. Super Admin approves
6. Organization becomes active

---

## Task Lifecycle

New → Accepted → In Progress → Completed / Failed
Rejected → Admin Review → Reassign

---

# Project Structure

## Backend

```
backend/
 └── src/
     ├── config/
     ├── constants/
     ├── controllers/
     │   ├── AdminControllers/
     │   ├── AuthControllers/
     │   ├── EmployeeControllers/
     │   ├── OrganizationControllers/
     │   ├── SuperAdminControllers/
     │   └── TaskControllers/
     ├── jobs/
     ├── middleware/
     ├── models/
     ├── routes/
     ├── utils/
     └── app.js
 server.js
```

---

## Frontend

```
frontend/
 └── src/
     ├── api/
     ├── components/
     ├── context/
     ├── hooks/
     ├── pages/
     ├── slices/
     ├── store/
     ├── utils/
     └── App.jsx
```

---

# Architecture

Frontend → API Layer → Express Routes → Controllers → Services → Models → MongoDB

Redux Store acts as **single source of truth** for:

* Auth
* Organization
* Tasks
* Super Admin Data

---

# Authentication Flow

Login returns:

* accessToken
* user role
* organizationId
* permissions

Redux stores:

```
auth.user
auth.token
auth.role
auth.organization
```

Persisted using localStorage.

---

# Super Admin Organization Control

Super Admin can **enter any organization**.

Flow:

1. Super Admin clicks "Enter Organization"
2. Backend generates impersonation token
3. Token includes orgId + admin role
4. Frontend switches context
5. Admin dashboard loads

This avoids duplicating dashboards.

---

# Redux Store Structure

```
store
 ├── authSlice
 ├── organizationSlice
 ├── taskSlice
 └── superAdminOrgSlice
```

---

# Global State Usage

Example:

```
const user = useSelector(state => state.auth.user)
const org = useSelector(state => state.organization.data)
const tasks = useSelector(state => state.tasks.list)
```

Dispatch:

```
dispatch(setOrganization(data))
dispatch(setTasks(data))
```

---

# Installation

## Backend

```
cd backend
npm install
```

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run

```
npm run dev
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```

---

# API Modules

## Auth

```
POST /auth/create-organization
POST /auth/login
POST /auth/logout
```

## Admin

```
POST /admin/add-employee
POST /admin/create-task
PATCH /admin/update-task
DELETE /admin/delete-task
```

## Employee

```
PATCH /employee/accept-task
PATCH /employee/complete-task
PATCH /employee/fail-task
```

## Organization

```
GET /organization/details
PATCH /organization/update
```

## Super Admin

```
GET /superadmin/organizations
PATCH /superadmin/approve
PATCH /superadmin/reject
PATCH /superadmin/revoke
DELETE /superadmin/delete
```

---

# Permissions System

Permissions defined in:

```
constants/permissions.js
```

Used via middleware:

```
auth.middleware.js
role.middleware.js
permission.middleware.js
```

---

# Background Jobs

Located in:

```
jobs/
```

Includes:

* inactiveEmployee.js
* taskOverdue.js

Used for cron-based automation.

---

# Data Models

### User

```
firstName
lastName
email
password
role
organization
status
permissions
```

### Organization

```
name
category
description
status
admins
employees
```

### Task

```
title
description
assignedTo
status
priority
dueDate
```

---

# State Persistence

Redux + localStorage

Store saved on:

* login
* organization fetch
* tasks fetch

Rehydrated on refresh.

---

# Environment Variables

Backend

```
PORT
MONGO_URI
JWT_SECRET
```

Frontend

```
VITE_API_BASE_URL
```

---

# Scripts

Backend

```
npm run dev
npm start
```

Frontend

```
npm run dev
npm run build
```

---

# Security

* JWT authentication
* Role-based access control
* Permission middleware
* Password hashing
* Protected routes

---

# Future Improvements

* Notifications
* Real-time updates
* Activity logs
* Audit tracking
* File attachments
* Analytics dashboard

---

# Author

Staffle — Organization & Task Management System
Built using MERN stack architecture