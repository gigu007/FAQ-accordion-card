//Select the content elements from the DOM
const FAQs = document.querySelectorAll('.icon');

//Loop through all the elements and add an event listener to them
FAQs.forEach((question) =>
  question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
      question.parentNode.clasList.toggle('active');
    } else {
      FAQs.forEach((question) => question.parentNode
      .classList.remove('active'));
      question.parentNode.classList.add('active');
    }
  })
);
