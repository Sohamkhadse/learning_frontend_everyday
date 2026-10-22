import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';

const router = express.Router();

function validPassword(password) {
  return password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password);
}

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, rollNumber, course, password } = req.body;

    if (!name || !email || !phone || !rollNumber || !course || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!validPassword(password)) {
      return res.status(400).json({
        message: 'Password must have 8 characters, one uppercase letter and one special character'
      });
    }

    const existingStudent = await Student.findOne({
      email: email.toLowerCase()
    });

    if (existingStudent) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      phone,
      rollNumber,
      course,
      password: hashedPassword
    });

    res.status(201).json({
      message: 'Student registered successfully',
      student: {
        id: student._id,
        name: student.name,
        email: student.email
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const student = await Student.findOne({
      email: email.toLowerCase()
    });

    if (!student || !(await bcrypt.compare(password, student.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: student._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;