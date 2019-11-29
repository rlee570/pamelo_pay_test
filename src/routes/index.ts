import Router from "express";
import Transaction from "../models/transaction";
import transactions from "../models/transactions.json";

const router = Router();

router.get("/transactions", (req, res) => {
  res.send(transactions);
});

router.post("/transactions", (req, res) => {
  const body: Transaction = new Transaction(
    req.body.id,
    req.body.currency,
    req.body.amount,
    req.body.user,
    req.body.date,
    req.body.toAccount
  );
  //I don't like this but to create specific error messages I have to check at some point.
  if (body.id == null) {
    res.status(400);
    res.send({ message: "No id field or id was null" });
  } else if (body.currency == null) {
    res.status(400);
    res.send({ message: "No currency field or currency was null" });
  } else if (body.amount == null) {
    res.status(400);
    res.send({ message: "No amount field or amount was null" });
  } else if (body.user == null) {
    res.status(400);
    res.send({ message: "No user field or user was null" });
  } else if (body.date == null) {
    res.status(400);
    res.send({ message: "No date field or date was null" });
  } else if (body.toAccount == null) {
    res.status(400);
    res.send({ message: "No toAccount Field or toAccount was null" });
  } else {
    res.status(200);
  }
});

export default router;
