import User from "../models/user.model.js";

export const api = (req, res) => {
  res.json({
    message: "API is working!",
  });
};
