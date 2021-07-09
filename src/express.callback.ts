module.exports = function makeExpressCallback(controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,

      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
    };
    controller(httpRequest)
      .then(({ statusCode, data }) => {
        res.status(statusCode);
        return res.json(data);
      })
      .catch((e) =>
        res.status(500).send({ error: "An unkown error occurred." })
      );
  };
};
