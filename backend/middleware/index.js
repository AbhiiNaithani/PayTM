const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: 'Signup first required',
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            res.status(403).json({
                message: 'User Id does not exist',
            })
        }
    } catch (error) {
        res.status(403).json({
            message: 'Invalid User',
        })
    }


}

module.exports = {
    authMiddleware,
}