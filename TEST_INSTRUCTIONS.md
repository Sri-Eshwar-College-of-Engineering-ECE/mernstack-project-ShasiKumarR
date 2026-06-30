# Testing Instructions for Patient Monitor

## Step 1: Start Backend Server

```bash
cd backend
npm run dev
```

Wait for these messages:
- "MongoDB connected"  
- "Server running on port 5000"

## Step 2: Start Frontend Server (new terminal)

```bash
cd frontend  
npm run dev
```

Wait for: Local server URL (usually http://localhost:5173)

## Step 3: Test the Application

1. **Open browser** → http://localhost:5173
2. **Register/Login** with any credentials
3. **Navigate to Sensor Data** page
4. **Click "➕ Add Data"** button
5. **Fill the form**:
   - Pulse Rate: 75
   - SpO₂ Level: 98  
   - Body Temperature: 36.5
6. **Click "💾 Save Data"**

## Debugging Steps

### Check Browser Console
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for error messages or debug logs

### Check Backend Terminal  
Look for these logs when saving:
- "=== POST /api/sensors ==="
- "Request body: { pulseRate: 75, ... }"

### Check Network Tab
1. Open Developer Tools
2. Go to Network tab  
3. Click "Save Data"
4. Look for the POST request to /api/sensors
5. Check if request has proper headers and body

## Common Issues

1. **MongoDB not running**
   - Error: "MongoDB connection failed"
   - Fix: Start MongoDB service or use online MongoDB

2. **Environment variables missing**
   - Error: "JWT_SECRET not defined"
   - Fix: Create .env file in backend folder with:
     ```
     MONGO_URI=mongodb://localhost:27017/patient-monitor
     JWT_SECRET=your-secret-key-here
     PORT=5000
     ```

3. **CORS issues**
   - Error: "Failed to fetch"
   - Fix: Backend server needs CORS enabled (already implemented)

## Test Data Format

The frontend sends data in this format:
```json
{
  "pulseRate": 75,
  "spo2Level": 98,
  "bodyTemperature": 36.5
}
```

Expected backend response:
```json
{
  "_id": "...",
  "pulseRate": 75,
  "spo2Level": 98,
  "bodyTemperature": 36.5,
  "user": "...",
  "createdAt": "...",
  "updatedAt": "..."
}
```
