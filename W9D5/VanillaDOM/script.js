document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  let input = document.querySelector('.favorite-input');
  let button = document.querySelector('.favorite-submit')

  button.addEventListener('click', (e) => {
    e.preventDefault();
    let li = document.createElement('li')
    li.textContent = input.value;
    document.getElementById('sf-places').appendChild(li);
  });
  // --- your code here!



  // adding new photos
  let photoButton = document.querySelector('.photo-show-button');

  photoButton.addEventListener('click', e => {
    e.preventDefault();

    let hiddenFormDiv = document.querySelector('.photo-form-container');
    if (hiddenFormDiv.classList.contains('hidden')) {
      hiddenFormDiv.classList.remove('hidden');
    } else {
      hiddenFormDiv.classList.add('hidden');
    }
  })

  let photoSubmit = document.querySelector('.photo-url-submit');

  photoSubmit.addEventListener('click', e => {
    e.preventDefault();

    let input = document.querySelector('.photo-url-input');
    let li = document.createElement('li');
    let img = document.createElement('img')
    img.setAttribute('src', input.value)
    li.appendChild(img)

    let photosUl = document.querySelector('.dog-photos');
    photosUl.appendChild(li)
  })
  // --- your code here!



});
