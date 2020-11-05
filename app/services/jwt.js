const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const privateKey = process.env.JWT_PRIVATE || "privateeyforme";
// const publicKey = process.env.JWT_PUBLIC || "publickeyforme";

module.exports = class JWT {
    static sign(payload, expiresIn) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, privateKey, { expiresIn }, (err, token) => {
                if (err) return reject(err);
                resolve(token)
            })
        });
    }

    static verify(token) {
        return jwt.verify(token, privateKey);
    }

    static decode(token) {
        return jwt.decode(token, { complete: true });
    }

    static comparePassword(password, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash).then(data => {
                resolve(data);
            }).catch(err => {
                return reject(err);
            })
        });
    }

    static hashPassword(password) {
        return bcrypt.hash(password, 8);
    }
};