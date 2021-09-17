const { events } = require("./data.json");
export default (req, res) => {
  if (req.method === "GET") {
    const evt = events.find((ev) => ev.slug === req.query.slug);
    res.status(200).send({ evt });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).send({ message: `${req.method} Method not allowed` });
  }
};
