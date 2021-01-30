// Grab all elements

const navElements = document.querySelectorAll('nav > .page');

navElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    const currentlySelected = document.querySelector('nav > .page.selected');
    currentlySelected.classList.remove('selected');
    element.classList.add('selected');
    const pageLiElements = document.querySelectorAll('.pages > li');
    pageLiElements.forEach((li) => {
      li.style.transform = `translateY(-${index * 90}vh)`;
    });
  });
});
