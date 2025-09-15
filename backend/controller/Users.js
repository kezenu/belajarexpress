import Users from '../models/UserModel.js';
import argon2 from 'argon2';

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
export const createUsers = async (req, res) => {
  try {
    const { name, email, password, confPassword, role } = req.body;
    if (password !== confPassword) {
      res.status(400).json({
        msg: 'Password dan Konffirmasi Password tidak cocok',
      });
    }
    const hashPassword = await argon2.hash(password);
    const response = await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
export const updateUsers = async (req, res) => {
  try {
    const response = await Users.update({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
export const deleteUsers = (req, res) => {};
