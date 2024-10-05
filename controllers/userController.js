const User = require('../models/User'); 

exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log('Request Body:', req.body); 
  
  try {
    // Log before creating a new user
    console.log('Attempting to create a new user...');

    const newUser = await User.create({
      name,
      email,
      phone,
      password
    });

    // Log successful user creation
    console.log('User created successfully:', newUser);
    
    res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });
  } catch (err) {
    // Log the error details
    console.error('Error creating user:', err);
    res.status(500).json({ success: false, message: 'Signup failed', error: err });
  }
};
