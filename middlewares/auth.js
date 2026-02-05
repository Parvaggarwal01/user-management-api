let success = true;
export const checkAuth = (req, res, next) => {
  if(success){
    console.log('Auth Checked');
    next();
  }else{
    console.log('Failed Checked');
  }
}
export const validateUserById = (req, res, next) => {
  const {id} = req.body;

  if(!id || id.length < 5){
    return res.status(400).json({
      success: false,
      message: "Inavlid User ID"
    })
  }
  next();
}

export const validateUserId = (req, res, next) => {
  const {id} = req.body;

  if(!id || id.length < 5){
    return res.status(400).json({
      success: false,
      message: "Inavlid User ID"
    })
  }
  next();
}

export const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
    });
  }
  next();
}
