# superadminController.js
exports.getAllMentors = (req, res) => {
  res.json([
    { _id: "1", email: "mentor1@example.com", approved: false },
    { _id: "2", email: "mentor2@example.com", approved: true }
  ]);
};
