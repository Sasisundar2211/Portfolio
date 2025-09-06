# API Contracts for Sasi Sundar Portfolio Website

## Overview
This document defines the API contracts between frontend and backend for the portfolio website, specifically focusing on the contact form email functionality.

## Backend Endpoints Needed

### 1. Contact Form Email Endpoint
**Endpoint:** `POST /api/contact`

**Purpose:** Send contact form emails to Sasi Sundar's email

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error description",
  "error": "detailed error if needed"
}
```

## Frontend Integration Changes

### Current Mock Implementation
- Contact form in `/app/frontend/src/components/Contact.jsx` currently shows mock success messages
- Form data is collected but not sent to backend

### Changes Required
1. Replace mock `setTimeout` with actual API call to `POST /api/contact`
2. Handle real success/error responses
3. Show appropriate toast messages based on actual backend response
4. Add proper loading states and error handling

## Email Configuration
- **To Email:** sasisundhar2211@gmail.com
- **Email Template:** Professional contact form template
- **Fields to include:** Name, Email, Subject, Message, Timestamp

## Data Flow
1. User fills contact form
2. Frontend validates data
3. Frontend sends POST request to `/api/contact`
4. Backend validates data and sends email
5. Backend returns success/error response
6. Frontend shows appropriate message to user

## Current Mock Data Removal
- Remove mock email functionality from Contact.jsx
- Replace with actual backend API integration
- Maintain same UI/UX but with real functionality