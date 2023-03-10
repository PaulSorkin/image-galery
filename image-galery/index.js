let url = 'https://api.unsplash.com/search/photos?query=random&per_page=30&orientation=landscape&client_id=2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y';
const topic = document.querySelector('.search-field');
const content = document.querySelector('.gallery-container');
const searchImage = document.querySelector('.search-icon');

getData();

// Fetch data
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}

// Show images on the page
function showData(data) {
    for (let i=0; i<data.results.length; i++) {
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.src = data.results[i].urls.regular;
        img.alt = data.results[i].alt_description;
        img.addEventListener('click', () => ale(data.results[i].alt_description))
        content.append(img);
    }
}

//change url according to request
function chooseTopic() {
    if (topic.value !== '') 
    content.innerHTML = '';
    let searchWord = topic.value;
    url = `https://api.unsplash.com/search/photos?query=${searchWord}&per_page=30&orientation=landscape&client_id=2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y`
    getData();
}

// search after pushing Enter
document.addEventListener('keyup', theKey => {
    if (theKey.code === 'Enter' || theKey.code === 'NumpadEnter') chooseTopic()
});

// search after magnifier click
searchImage.addEventListener('click', chooseTopic);


function ale(message) {
    alert(message);
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