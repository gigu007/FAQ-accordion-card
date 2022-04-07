//Select the content elements from the DOM
const questions = document.querySelectorAll('.label');

//Loop through all the elements and add an event listener to them
questions.forEach((question) =>
  question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
      question.parentNode.clasList.toggle('active');
    } else {
      questions.forEach((question) => question.parentNode
      .classList.remove('active'));
      question.parentNode.classList.add('active');
    }
  })
);
