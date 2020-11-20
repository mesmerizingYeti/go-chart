module.exports = app => {

  app.get("/home", (req, res) => {
    res.json({ page: "home" });
  });

  app.get("/", (req, res) => {
    res.sendStatus(200);
  });

};