import Quotes from "../models/Quotes.model";

export const getQuotes = async (req, res) => {
  try {
    const result = await Quotes.findAll();
    res.status(200).json({
      response: "OK",
      status: 200,
      result,
    });
  } catch (err) {
    console.log(err);
    res.json({ errors: err });
  }
};

export const getQuotesById = async (req, res) => {
  try {
    const result = await Quotes.findOne({ where: { id: req.params.id } });
    res.status(200).json({
      response: "OK",
      status: 200,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.json({ errors: err });
  }
};

export const createQuote = async (req, res) => {
  const { quote, user } = req.body;
  try {
    await Quotes.create({
      quote: quote,
      user: user,
    });
    res.status(201).json({
      response: "created!",
      status: 201,
    });
  } catch (err) {
    console.log(err);
    res.json({ errors: err });
  }
};

export const updateQuote = async (req, res) => {
  const { quote, user } = req.body;
  try {
    await Quotes.update(
      {
        quote: quote,
        user: user,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({
      response: "updated!",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    res.json({ errors: err });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    await Quotes.destroy({ where: { id: req.params.id } });
    res.status(202).json({
      response: "deleted!",
      status: 202,
    });
  } catch (err) {
    console.log(err);
    res.json({ errors: err });
  }
};
