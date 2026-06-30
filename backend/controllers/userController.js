// Get user profile
export const getUserProfile = async (req, res) => {
  if (!req.user) return res.status(404).json({ message: "User not found" });
  res.json({ name: req.user.name, email: req.user.email });
};
