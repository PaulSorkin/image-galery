let url = 'https://api.unsplash.com/search/photos?query=random&per_page=30&orientation=landscape&client_id=2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y'

//change url according to request
const topic = document.querySelector('.search-field');
const content = document.querySelector('.gallery-container');
const searchImage = document.querySelector('.search-icon');
function chooseTopic() {
    if (topic.value !== '') 
    content.innerHTML = '';
    let searchWord = topic.value;
    url = `https://api.unsplash.com/search/photos?query=${searchWord}&per_page=30&orientation=landscape&client_id=2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y`
    getData();
}

// realize search after pushing Enter
document.addEventListener('keyup', theKey => {
    if (theKey.code === 'Enter' || theKey.code === 'NumpadEnter') chooseTopic()
});

// realize search after magnifier click
searchImage.addEventListener('click', chooseTopic)

//that main API function
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    showData(data);
}
  getData();

  //Show images on the page
  function showData(data) {
    for (let i = 0; i<data.results.length; i++) {
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        let pageImaes = data.results.map((el) => {return el.urls.regular})
        img.src = `${pageImaes[i]}`;
        img.alt = 'image';
        galleyContainer.append(img);
    }
  }


    //Create image in the container - WORKS
    /*const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = 'https://images.unsplash.com/photo-1597222312070-5f36dc3918fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDAzNjN8MHwxfHNlYXJjaHwxfHxwZXJfcGFnZSUzRDMwfGVufDB8MHx8fDE2NDQ2NTA4NzY&ixlib=rb-1.2.1&q=80&w=1080';
    img.alt = 'image';
    galleyContainer.append(img);*/

    //get an array of urls for pics - WORKS
   // newUrls = data.results.map((el) => {console.log(el.urls.regular)})

   // my key: 2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y