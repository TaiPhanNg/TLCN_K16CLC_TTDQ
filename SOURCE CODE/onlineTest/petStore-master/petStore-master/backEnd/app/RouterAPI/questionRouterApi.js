var express = require("express");
var Question = require("./../model/question");
const apiRouterQuestion = express.Router();

apiRouterQuestion
  .route("/questions")
  .post((req, res) => {
    var question = new Question({
        question: req.body.question,
        audio: req.body.audio,
        image: req.body.image,
        answer_a: req.body.answer_a,
        answer_b: req.body.answer_b,
        answer_c: req.body.answer_c,
        answer_d: req.body.answer_d,
        answer_correct:  req.body.answer_correct,
        status: req.body.status,
        part: req.body.part,
        task: req.body.task,
        isDeleted: req.body.isDeleted
    });
    Question.collection.insertOne(question, err => {
      if (err) {
        if (err.code === 11000) {
          return res.json({
            success: false,
            message: "A question with that name has already existed!"
          });
        } else {
          res.send(err);
        }
      }
      res.json({
        message: "question created!"
      });
    });
  })
  .get((req, res) => {
    Question.find((err, questions) => {
      return res.json(questions);
    });
  });

apiRouterQuestion
  .route("/questions/:question_id")
  .get((req, res) => {
    Question.findById(req.params.question_id).exec((err, question) => {
      if (err) {
        res.send(err);
      } else {
        res.json(question);
      }
    });
  })
  .put((req, res) => {
    Question.findById(req.params.question_id).exec((err, question) => {
      if (err) {
        res.send(err);
      } else {
        if (req.body.question) {
          question.question = req.body.question;
        }
        if (req.body.audio) {
          question.audio = req.body.audio;
        }
        if (req.body.image) {
          question.image = req.body.image;
        }
        if (req.body.answer_a) {
            question.answer_a = req.body.answer_a;
        }
        if (req.body.answer_b) {
            question.answer_b = req.body.answer_b;
        }
        if (req.body.answer_c) {
            question.answer_c = req.body.answer_c;
        }
        if (req.body.answer_d) {
            question.answer_d = req.body.answer_d;
        }
        if (req.body.answer_correct) {
            question.answer_correct = req.body.answer_correct;
        }
        if (req.body.status) {
            question.status = req.body.status;
        }
        if (req.body.part) {
            question.part = req.body.part;
        }
        if (req.body.task) {
            question.task = req.body.task;
        }
        if (req.body.isDeleted) {
          question.isDeleted = req.body.isDeleted;
        }
        Question.updateOne({ _id: req.params.question_id }, question, err => {
          if (err) {
            res.send(err);
          } else {
            res.json({
              message: "Question updated!"
            });
          }
        });
      }
    });
  })
  .delete((req, res) => {
    Question.remove({ _id: req.params.question_id }).exec((err, question) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: "Delete successfully!"
        });
      }
    });
  });

apiRouterQuestion.route("/questions/search/:question_question").get((req, res) => {
  Question.find({ question: { $regex: req.params.question_question, $options: "$i" } }).exec(
    (err, question) => {
      if (err) {
        res.send(err);
      } else {
        res.json(question);
      }
    }
  );
});

module.exports = apiRouterQuestion;
