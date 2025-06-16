const Mechanic = require('../models/mechanic');

// Create a mechanic
exports.createMechanic = async (req, res) => {
  try {
    const mechanic = await Mechanic.create(req.body);
    res.status(201).json({
      status: 'success',
      data: mechanic
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Get all mechanics
exports.getAllMechanics = async (req, res) => {
  try {
    const mechanics = await Mechanic.find();
    res.status(200).json({
      status: 'success',
      results: mechanics.length,
      data: mechanics
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch mechanics'
    });
  }
};

// Get single mechanic
exports.getMechanic = async (req, res) => {
  try {
    const mechanic = await Mechanic.findById(req.params.id);
    if (!mechanic) {
      return res.status(404).json({
        status: 'fail',
        message: 'Mechanic not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: mechanic
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Update mechanic
exports.updateMechanic = async (req, res) => {
  try {
    const mechanic = await Mechanic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!mechanic) {
      return res.status(404).json({
        status: 'fail',
        message: 'Mechanic not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: mechanic
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Delete mechanic
exports.deleteMechanic = async (req, res) => {
  try {
    const mechanic = await Mechanic.findByIdAndDelete(req.params.id);
    if (!mechanic) {
      return res.status(404).json({
        status: 'fail',
        message: 'Mechanic not found'
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
