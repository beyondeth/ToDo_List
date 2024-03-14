const quotes = [
{

    quote: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "-Steeve Jobs-",
},
{

    quote: "I've always been attracted to the more revolutionary changes.",
    author: "-Steeve Jobs-",
},
{

    quote: "It's really hard to design products by focus groups.",
    author: "-Steeve Jobs-",
},
{

    quote: "I'm as proud of many of the things we haven't done as the things we have done.",
    author: "-Steeve Jobs-",
},
{

    quote: "Quality is more important than quantity. One home run is much better than two doubles.",
    author: "-Steeve Jobs-",
},
{

    quote: "Be a yardstick of quality.",
    author: "-Steeve Jobs-",
},
{

    quote: "Let's go invent tomorrow rather than worrying about what happened yesterday.",
    author: "-Steeve Jobs-",
},
{

    quote: "Innovation distinguishes between a leader and a follower.",
    author: "-Steeve Jobs-",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



