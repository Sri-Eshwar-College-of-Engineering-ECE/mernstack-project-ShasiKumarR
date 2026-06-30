# Patient Monitor Setup Instructions

## Quick Setup Guide

### 1. Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
MONGO_URI=mongodb://localhost:27017/patient-monitor
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
PORT=5000
```

### 2. Install Dependencies

#### Backend:
```bash
cd backend
npm install
npm run dev
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

### 3. Database Setup

Make sure MongoDB is running on your system:
- Local MongoDB: Start the MongoDB service
- Or use MongoDB Atlas (free cloud): Update MONGO_URI in .env

### 4. Access the Application

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### 5. Test the Application

1. Register a new account
2. Login with your credentials
3. Navigate to "Sensor Data" to see the dashboard
4. Use "Generate Sample Data" button to add test data
5. Try editing your profile

## Sensor Data Structure

The application now uses the correct field names:
- **Pulse Rate** (BPM): 60-100 normal range
- **SpO₂ Level** (%): 94-100% normal range  
- **Body Temperature** (°C): 36-38°C normal range

## Features Fixed

✅ User registration and login  
✅ Protected routes  
✅ Sensor data dashboard with correct fields  
✅ Profile editing functionality  
✅ Navigation between pages  
✅ Sample data generation  
✅ Color-coded health status indicators  
✅ Responsive design  
✅ Error handling  

## Navigation

- Home: Overview and welcome page
- Sensor Data: Health monitoring dashboard
- Profile: User information and edit functionality
- Login/Signup: Authentication pages
