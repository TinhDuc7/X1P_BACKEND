const User = require('../models/User');

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Successfully Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(401).json('User does not exist')
        }
        const { password, __v, createAt, updatedAt, ...userData } = user._doc;
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    deleteUser,
    getUser
}