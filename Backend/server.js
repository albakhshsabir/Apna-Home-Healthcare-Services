const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('Backend running successfully');
});

app.post('/book', (req,res)=>{
  console.log('Booking Received:', req.body);

  res.json({
    message:'Appointment saved successfully'
  });
});

app.post('/register', (req,res)=>{
  console.log('Register Received:', req.body);

  res.json({
    message:'User Registered Successfully'
  });
});

app.listen(5000, ()=>{
  console.log('Server running on port 5000');
});