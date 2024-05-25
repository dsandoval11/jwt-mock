const jwt = require('jsonwebtoken');

const JWT_SECRET = "hash123";
const JWT_EXPIRES_IN = "1d";
const EMAIL = "prueba@gmail.com";
const PASSWORD = "contra123";

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log( req.body)
    if(email === EMAIL && password === PASSWORD) {
      const token = jwt.sign({
        role: "ADMIN",
        user: "1",
      }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });
      res.status(200).json({jwt: token})
    } else {
      res.status(401).json({message: 'invalid credentials'})
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'email and password are required'})
  }
}

module.exports = login;
