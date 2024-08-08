import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
  try {
    // Check if the token is in cookies or the Authorization header
    const token = req.cookies.token || (req.headers["authorization"] && req.headers["authorization"].split(" ")[1]);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    // Verify the token
    const decodeUser = await jwt.verify(token, process.env.JWT_SECRET);
    
    // console.log("JWT Secret:", process.env.JWT_SECRET);
    // console.log("Decoded User:", decodeUser);

    if (!decodeUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.userId = decodeUser.userId;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while authenticating the user",
      error: error.message,
    });
  }
};

export default isAuthenticated;
