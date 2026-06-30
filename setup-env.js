// Environment setup script for Patient Monitor
const fs = require('fs');
const path = require('path');

const envContent = `MONGO_URI=mongodb://localhost:27017/patient-monitor
JWT_SECRET=super-secret-jwt-key-patient-monitor-2024-change-in-production
PORT=5000
THINGSPEAK_CHANNEL_ID=3141021
THINGSPEAK_READ_API_KEY=S7Z6XYOBYYJ3V1K0
THINGSPEAK_WRITE_API_KEY=9UKFBFLU3VVE9CP3`;

const envPath = path.join(__dirname, 'backend', '.env');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Environment file created successfully!');
  console.log('📁 Location:', envPath);
  console.log('🔧 Contents:');
  console.log(envContent);
  console.log('\n🚀 You can now start the backend server with: npm run dev');
} catch (error) {
  console.error('❌ Error creating environment file:', error.message);
  console.log('\n📝 Please create the file manually:');
  console.log('1. Create a file named .env in the backend folder');
  console.log('2. Add the following content:');
  console.log(envContent);
}
