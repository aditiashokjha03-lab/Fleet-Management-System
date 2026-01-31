const supabase = require('../config/db');

exports.registerUser = async (req, res) => {
    const { email, full_name } = req.body;
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return res.status(400).json ({message: error.message});

    await supabase.from('profiles').insert([{id: data.user.id, full_name, role:'driver'}]);

    res.status(201).json({message: "Driver registered successfully"});
};

exports.loginUser = async(req, res) => {
    const {email, password} = req.body;
    const {data, error} = await supabase.auth.signInWithPassword ({email, password});

    if (error) return res.status(401).json({message : "Invalid Credentials"});
    res.status(200).json({token: data.session.access_token});
};
