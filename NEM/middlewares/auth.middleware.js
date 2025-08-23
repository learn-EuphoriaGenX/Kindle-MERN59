

let jwt = require('jsonwebtoken')
let authMiddleware = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        console.log(token);

        if (!token) return res.status(401).send({ message: 'Access Denied', success: false });
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({ message: 'Invalid Token', success: false });
    }
}
module.exports = authMiddleware;