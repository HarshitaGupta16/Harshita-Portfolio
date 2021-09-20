const listOfBlogs = [
    {
        h1: "Fetch all Repositories of your Github Account",
        small: "23 May, 2021",
        src: "images/blog-2.jpg",
        alt: "blog-2",
        p: "This blog explains my <strong>Python</strong> project. This will guide you along the whole code to make request to the remote application like Github and fetch all it's repositories.",
        href: "https://harshita16.hashnode.dev/fetch-all-repositories-of-your-github-account"
    },
    {
        h1: "Play with Spreadsheet using Python",
        small: "18 Apr, 2021",
        src: "images/blog-1.jpg",
        alt: "blog-1",
        p: "This blog is written for a small <strong>Python</strong> project that I did. This will guide you along the whole code to update and fetch data from the spreadsheet.",
        href: "https://harshita16.hashnode.dev/play-with-spreadsheet-using-python"
    }
];

const orderedList = document.querySelector('ol');
let allBlogs = "";

for(let item of listOfBlogs) {
    let blogs = `
    <li class="list-blog">
        <div class="container margin-medium">
            <h1>${item['h1']}</h1>
            <small>${item['small']}</small>
            <img class="img-left-aligned" src=${item['src']} alt=${item['alt']}>
            <p>${item['p']}</p>
            <a class="link link-primary"
                href= ${item['href']}
                target="_blank">Read More...</a>
        </div>
    </li>`
allBlogs += blogs;
}

orderedList.innerHTML = allBlogs;