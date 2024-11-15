const imageCont = document.getElementById("image-container");
const input = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const paginationCont = document.querySelector("#pagination-cont");
const pagination = document.querySelector("#pagination-cont>h3");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const clientId = "CCuZAotX4jEGu2bszq_oPhHTWQY7PftLMDqKbxniHLo";
const limit = 8;
const url = `https://api.unsplash.com/photos?client_id=${clientId}&per_page=${limit}`;
let query = "";
let page = 1;
let totelPage = 0;

const createImageCard = (image) => {
  const div = document.createElement("div");
  div.className = "imageDiv";
  const img = document.createElement("img");
  img.src = image.imageUrl;
  const title = document.createElement("h3");
  title.innerText = image.title;

  div.append(img, title);
  imageCont.append(div);
};

if (totelPage === 0) {
  paginationCont.style.dispaly = "none";
}
prevBtn.addEventListener("click", () => {
  if (page > 1) {
    imageCont.innerHTML = null;
    page -= 1;
  }
});
nextBtn.addEventListener("click", () => {
  if (totelPage > page) {
    imageCont.innerHTML = null;
    page = page + 1;
    searchImagas(query, page);
  }
});

// get data by default
const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data?.map((image) => {
      const imageUrl = image.urls.regular;
      const title = image.alt_description || data.slug;
      const imageObj = { title, imageUrl };
      createImageCard(imageObj);
    });
  } catch (err) {
    console.log(err);
  }
};

getData();

// get data on search
const searchImagas = async (query, page) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=${limit}&query=${query}&client_id=${clientId}`
    );
    const data = await res.json();
    console.log(data);
    totelPage = data?.total_pages;
    pagination.innerText = `${page}/${data?.total_pages}`;
    data?.results?.map((image) => {
      const imageUrl = image.urls.regular;
      const title = image.alt_description || data.slug;
      const imageObj = { title, imageUrl };
      createImageCard(imageObj);
    });
  } catch (error) {
    console.log(error);
  }
};

searchBtn.addEventListener("click", (e) => {
  imageCont.innerHTML = null;
  query = input.value;
  searchImagas(query, page);
});
