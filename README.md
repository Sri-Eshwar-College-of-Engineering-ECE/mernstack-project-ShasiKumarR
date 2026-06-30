<<<<<<< HEAD
# Patient Health Monitor - MERN Stack Application

A comprehensive IoT patient monitoring system built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Real-time Monitoring**: Track heart rate, SpO₂, and body temperature
- **Dashboard**: Beautiful UI to visualize sensor data
- **Data Visualization**: Historical and real-time data tracking
- **Security**: Protected routes and secure API endpoints

## Tech Stack

### Frontend
- React 19.1.1
- React Router DOM 7.9.2
- Bootstrap 5.3.8
- Axios for API calls
- Context API for state management

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd patient-monitor
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create environment variables
# Copy the example below to .env file
MONGO_URI=mongodb://localhost:27017/patient-monitor
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
PORT=5000

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install

# Start the frontend development server
npm run dev
```

### 4. Database Setup
Make sure MongoDB is running locally or configure your cloud MongoDB connection in the `.env` file.

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
MONGO_URI=mongodb://localhost:27017/patient-monitor
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
PORT=5000
```

**Important**: Change the JWT_SECRET to a secure random string in production!

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Sensors
- `GET /api/sensors` - Get sensor data (protected)
- `POST /api/sensors` - Add sensor data (protected)

### Users
- `GET /api/users/me` - Get user profile (protected)

## Project Structure

```
patient-monitor/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## Usage

### 1. Start the Application
Run both backend and frontend servers:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173` (Vite default)

### 2. Register/Login
- Visit `http://localhost:5173`
- Create a new account or login with existing credentials
- Dashboard will be accessible after authentication

### 3. View Sensor Data
- Navigate to "Sensor Data" section
- View real-time and historical health monitoring data
- Data shows color-coded status indicators

### 4. IoT Device Integration
To connect IoT sensors (ESP32, Arduino, etc.):

1. Send POST requests to `/api/sensors` with:
```json
{
  "heartRate": 75,
  "spo2": 98,
  "temperature": 36.5
}
```

2. Include authentication header:
```
Authorization: Bearer <jwt_token>
```

## Development Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env` file
   - Verify network connectivity to MongoDB

2. **Authentication Issues**
   - Clear browser localStorage
   - Check JWT_SECRET in backend `.env`
   - Verify CORS settings

3. **Sensor Data Not Loading**
   - Check authentication token
   - Verify API endpoints
   - Check browser network tab for errors

### Ports
- Backend: 5000
- Frontend: 5173 (Vite default)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Regot pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section above
- Review API documentation and endpoints
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2A_MIV9j)
>>>>>>> bea076de9d6e60bf70a8d5287ef419d91bf17dad
