function generate() {
    let quotes = {
        "- Benjamin E. Mays": `"The tragedy in life doesn't lie in not reaching your goal.
        The tragedy lies in having no goal to reach."`,

        "- Ralph Marston": `"What you do today can improve all your tomorrows."`,

        "- Voltaire": `"It is difficult to free fools from the chains they revere."`,

        "- Albert Einstein": `“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."`,

        "― Aaron Lauritsen": `"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."`,

        "― John Galsworthy": `"Life calls the tune, we dance."`,

    };

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
