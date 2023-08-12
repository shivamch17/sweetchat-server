const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    const options = {
        secure: true,
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    // res.status(statusCode).cookie('token', token, options).json({
    //     success: true,
    //     user,
    //     token,
    // });
    res.status(statusCode).json({
        success: true,
        user,
        token, // Include the token in the response
      });
}

module.exports = sendToken;