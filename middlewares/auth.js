let success = true;
export const checkAuth = (req, res, next) => {
  if (success) {
    console.log("Auth Checked");
    next();
  } else {
    console.log("Failed Checked");
  }
};
export const validateUserById = (req, res, next) => {
  const { id } = req.body;

  if (!id || id.length < 5) {
    return res.status(400).json({
      success: false,
      message: "Inavlid User ID",
    });
  }
  next();
};

export const validateUserId = (req, res, next) => {
  const id = req.body.id || req.params.id;

  if (!id || id.length < 5) {
    return res.status(400).json({
      success: false,
      message: "Inavlid User ID",
    });
  }
  next();
};

export const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email and password are required",
    });
  }
  next();
};

export const tokenVerify = (req, res, next) => {
  const { token } = req.headers;

  if (token === "69609650") {
    console.log("Auth Successful");
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "Unauthorized Access",
    });
  }
};
