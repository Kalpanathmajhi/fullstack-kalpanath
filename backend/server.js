import express from "express";

const app = express();


app.get('/api/jokes', (req,res)=> {
    const jokes = [
        {
          id: 1,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 2,
          title: "What do you call a bear with no teeth?",
          content: "A gummy bear!"
        },
        {
          id: 3,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 4,
          title: "Did you hear about the mathematician who's afraid of negative numbers?",
          content: "He'll stop at nothing to avoid them!"
        },
        {
          id: 5,
          title: "How does a penguin build its house?",
          content: "Igloos it together!"
        },
        {
          id: 6,
          title: "What do you call a fish with no eyes?",
          content: "Fsh!"
        },
        {
          id: 7,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts!"
        },
        {
          id: 8,
          title: "What did one wall say to the other wall?",
          content: "I'll meet you at the corner!"
        },
        {
          id: 9,
          title: "Why did the bicycle fall over?",
          content: "Because it was two-tired!"
        },
        {
          id: 10,
          title: "What's orange and sounds like a parrot?",
          content: "A carrot!"
        }
      ];
      res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http;//localhost${port}`);
});