import mongoose from 'mongoose';
import session from 'express-session';
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
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

const whisperSchema = mongoose.Schema(
    {
        whisper: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(passportLocalMongoose, {usernameField: "email" });

const User = mongoose.model('User', userSchema);
const Whisper = mongoose.model('Whisper', whisperSchema);

export { User, Whisper };