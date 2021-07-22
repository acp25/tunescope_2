const router = require("express").Router();


router.get("/", async (req, res) => {
  try {
    res.render('homepage-login');
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/about", async (req, res) => {
  try {
    res.render('about', {
      logged_in: true
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/signup", async (req, res) => {
  try {
    res.render('homepage-signup', {layout: 'main'});
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get('/playlist', (req, res) => {
  res.render('playlist');
})

router.get("/explore", async (req, res) => {
    try {
      res.render('explore', {layout: 'main'});
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

module.exports = router;
