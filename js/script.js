//immediate invoked function expression
(function() {
    const quotes = [{
            quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
            author: "Wazed Rahman"
        },
        {
            quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
            author: "Shahid Alam"
        },
        {
            quote: "God save me from my friends. I can protect myself from my enemies.",
            author: "Claude Louis Hector de Villars "
        },
        {
            quote: "The price of anything is the amount of life you exchange for it.",
            author: "David Thoreau"
        },
        {
            quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
            author: "Charles Lindbergh"
        },
        {
            quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
            author: " Tyne Daly"
        }
    ];
    const gen_btn = document.querySelector('.generate-btn');
    const gen_qut = document.querySelector('.generated-quote');
    const author = document.querySelector('.author-name');
    gen_btn.addEventListener('click', function() {
        const random_index = Math.floor(Math.random() * quotes.length);
        console.log(random_index);
        gen_qut.textContent = quotes[random_index].quote;
        author.textContent = quotes[random_index].author;
    });
})();