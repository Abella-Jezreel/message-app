import User from '../models/userModel.js';

export const userRegister = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({
            username,
            password
        });
        await user.save();
        res.send('User Registered Successfully');
    } catch (error) {
        return res.status(400).send(error);
    }
};