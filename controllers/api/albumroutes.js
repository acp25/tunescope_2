const router = require("express").Router();

const { Album, Genre, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["comment_text", "user_id"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});




router.get("/rock", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 1,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["comment_text", "user_id"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/metal", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 2,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/pop", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 3,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/electronic", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 4,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/blues", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 5,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/jazz", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 6,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/classical", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 7,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/country", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 8,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/rap", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      where: {
        genre_id: 9,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
