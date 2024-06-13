const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Middleware to check password match and remove confirmPassword before save
FormDataSchema.pre('save', function (next) {
    if (this.password !== this.confirmPassword) {
        const err = new Error('Passwords do not match');
        return next(err);
    }
    this.confirmPassword = undefined;
    next();  
});

const FormDataModel = mongoose.model('FormData', FormDataSchema);

module.exports = FormDataModel;
