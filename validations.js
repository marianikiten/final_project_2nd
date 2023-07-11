import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Enter your email').isEmail(),
    body('password', 'Password must be not shorter than 5 symbols').isLength({ min: 5}), 
];

export const registerValidation = [
    body('email', 'Enter your email').isEmail(),
    body('password', 'Password must be not shorter than 5 symbols').isLength({ min: 5}), 
    body('fullName', 'Enter your name').isLength({min: 3}),
    body('avatarUrl', 'Wrong avatar URL').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Enter post title').isLength({min: 3}).isString(),
    body('text', 'Enter post text').isLength({ min: 10}).isString(), 
    body('tags', 'Wrong tag format').optional().isString(),
    body('imageUrl', 'Wrong image URL').optional().isString(),
];