const router = require("express").Router();
const { Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post("/", async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  
  });

  module.exports = router;