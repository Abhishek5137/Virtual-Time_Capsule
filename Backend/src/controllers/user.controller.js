import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const test = (req, res) => {
    res.json({
        message: "API is working!"
    });
}

export const registerUser = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(new ApiError(400, 'All fields are required'));
    }

    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username: username.toLowerCase() }] });
        if (existingUser) {
            return next(new ApiError(400, 'Email or username already exists'));
        }
    const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = new User({
            username: username.toLowerCase(),
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.json(new ApiResponse('Signup successful', {newUser}));
    } catch (error) {
       throw new ApiError(500, 'Error occurred while registering user');
    }
});

export const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(new ApiError(400, 'All fields are required'));
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(404, 'User not found');
        }

        const isPasswordValid = bcryptjs.compareSync(password, user.password);

        if (!isPasswordValid) {
          throw new ApiError(401, 'Invalid password');
        }
        const token = jwt.sign(
            { id: user._id, email: user.email},
            process.env.JWT_SECRET
          );
          const { password: pass, ...rest } = user._doc;

                res
                .status(200)
                .cookie('access_token', token,
                 {
                  httpOnly: true,
                })
                .json(new ApiResponse('Login successful', { user: rest }));

    } catch (error) {
      throw new ApiError(500, 'Error occurred while logging in user');
    }
});

export const logoutUser = asyncHandler(async (req, res, next) => {
    res
    .status(200)
    .clearCookie('access_token')
    .json(new ApiResponse('Logged out', null));
});

export const deleteUser = asyncHandler(async (req, res, next) => {

    const token = req.cookies.access_token;

    if (!token) {
    throw new ApiError(401, 'Unauthorized: User must be logged in');
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userEmailFromToken = decoded.email;

        if (!userEmailFromToken) {
            return next(new ApiError(400, 'User email not found in authentication token'));
        }

        const { email } = req.body;

        if (!email || email === '') {
            return next(new ApiError(400, 'Email is required'));
        }

        if (userEmailFromToken !== email) {
            return next(new ApiError(403, 'Forbidden: User can only delete their own account'));
        }

        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return next(new ApiError(404, 'User not found'));
        }
    } catch (error) {
        return next(new ApiError(401, 'Unauthorized: Invalid or expired token'));
    }

    res.json(new ApiResponse('User deleted', null));
});

export const getUser = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ApiError(401, 'Unauthorized: User must be logged in'));
    }

    res.json(new ApiResponse('User found', req.user));
});

export const updateUser = asyncHandler(async (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return next(new ApiError(401, 'Unauthorized: User must be logged in'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userEmailFromToken = decoded.email;

        if (!userEmailFromToken) {
            return next(new ApiError(400, 'User email not found in authentication token'));
        }

        const { email, username, password } = req.body;

        if (!email || email === '') {
            return next(new ApiError(400, 'Email is required'));
        }

        if (userEmailFromToken !== email) {
            return next(new ApiError(403, 'Forbidden: User can only update their own account'));
        }

        let user = await User.findOne({ email });

        if (!user) {
            return next(new ApiError(404, 'User not found'));
        }

        // Update username if provided
        if (username) {
            user.username = username;
        }

        // Update password if provided
        if (password) {
            user.password = bcryptjs.hashSync(password, 10);
        }

        // Save the updated user object
        await user.save();

        res.json(new ApiResponse('User updated', { user}));
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return next(new ApiError(401, 'Unauthorized: Invalid or expired token'));
        }
        return next(error);
    }
});



        
       