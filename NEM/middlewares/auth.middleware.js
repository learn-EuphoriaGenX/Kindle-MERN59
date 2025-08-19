

let jwt = require('jsonwebtoken')
let authMiddleware = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        console.log(token);

        if (!token) return res.status(401).send('Access Denied');
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        console.log(decoded);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}
module.exports = authMiddleware;