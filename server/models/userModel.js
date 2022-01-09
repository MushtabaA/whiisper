import mongoose from 'mongoose';
import session from 'express-session';
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

export { User };