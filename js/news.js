let newsAPI = "http://api.mediastack.com/v1/news?access_key=f370e4b4c07529a2bdd18ee58f0d97e5&country=in"
let dummyImg = "images/loading.png"

let app = document.querySelector(".app");
let screen = {
    main: app.querySelector(".main-screen"),
    news: app.querySelector(".news-screen")
};

let catagories = ["General", "Business", "Technology", "Entertainment", "Health", "Science", "Sports"];

for (let i = 0; i < catagories.length; i++) {
    let div = document.createElement("div");
    div.innerText = catagories[i];
    div.addEventListener("click", function () {
        screen.main.querySelector(".catagories .active").classList.remove("active");
        div.classList.add("active");
        fetchCategoriesNews(catagories[i]);


    });
    if (i == 0) {
        div.classList.add("active");
        fetchCategoriesNews(catagories[i]);
    }
    screen.main.querySelector(".catagories").appendchild(div);
}

async function fetchCategoriesNews(catagory) {
    try {
        let res = await fetch(newsAPI + catagory.toLowerCase());
        let data = await res.json();
        let news = data.data;

        for (let i = 0; i < news.length; i++) {
            let div = document.createElement("div");
            div.classList.add("item");
            div.addEventListener("click", function () {
                showFullNews(news[i]);

            });
            div.innerHTML = `
            <div class="thumbnail">
            <img src = "${news[i].image || dummyImg}">
            </div>
            <div class = "details">
            <h2>${news[i].title}</h2>
            <p>${news[i].description}</p>
            </div>
            `;
            screen.main.querySelector(".news-list").appendchild(div);

        }
    } catch (msg) { }
}

