import User from '../models/user.model.js';

export const signup = async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new User({
        username,
        password,
        email
    });

    await newUser.save()
        .then(() => {
            res.status(201).send('User created successfully');
        })
        .catch(err => {
            console.error('Error creating user:', err);
            res.status(500).send('Internal Server Error');
        });
};
