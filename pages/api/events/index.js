const { events } = require("./data.json");
export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).send({ events });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).send({ message: `${req.method} Method not allowed` });
  }
};
