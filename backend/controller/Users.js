import Users from '../models/UserModels.js';

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
        uuid: req.params.uuid,
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
    const data = req.body;
    const response = await Users.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
export const updateUsers = (req, res) => {};
export const deleteUsers = (req, res) => {};
