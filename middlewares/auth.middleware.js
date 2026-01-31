const supabase = require('../config/db');

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split('')[1];
    if (!token) return res.status(401).send('Access Denied');

    const {data: { user }, error} = await supabase.auth.getUser(token);
    if (error || !user) return res.status(401).send('Invalid Token');

    req.user = user;
    next();

};

module.exports = auth;