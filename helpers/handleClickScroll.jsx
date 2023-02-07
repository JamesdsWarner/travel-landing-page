export const handleClickScroll = (event) => {
  let element;
  if (event.target.innerText === 'What to do') {
    element = document.getElementById('whatToDo-section');
  }

  if (event.target.innerText === 'Scroll to top') {
    element = document.getElementById('navMenu-section');
  }

  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
