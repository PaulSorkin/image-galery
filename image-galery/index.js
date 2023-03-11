let url = 'https://api.unsplash.com/search/photos?query=random&per_page=30&orientation=landscape&client_id=2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y';
const topic = document.querySelector('.search-field');
const content = document.querySelector('.gallery-container');
const searchImage = document.querySelector('.search-icon');

const body = document.querySelector('body');
const darken = document.querySelector('.darken');
const modalWindow = document.querySelector('.modal-window');

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
        img.addEventListener('click', () => modalOpen(img.src, img.alt));
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

// Modal window open
function modalOpen(src, alt) {
    darken.classList.remove('hidden');
    darken.addEventListener('click', modalClose);
    modalWindow.classList.remove('hidden');
    body.classList.add('no-overflow');
    const pic = document.querySelector('.modal_pic');
    pic.src = src;
    pic.alt = alt;
    document.addEventListener('keyup', theKey => {
        if (theKey.code === 'Escape') modalClose()
    });
}

// Modal window close
function modalClose() {
    body.classList.remove('no-overflow');
    darken.classList.add('hidden');
    modalWindow.classList.add('hidden');
}

   // my key: 2H0jtKmrZwpjrcnn9F5U0OJGu7MLmzBNaMMxf5zFZ1Y