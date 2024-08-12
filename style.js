function toggleAnswer(element) {
  const answer = element.querySelector('.faq-answer');
  const plusIcon = element.querySelector('.plus-icon');
  if (answer.classList.contains('show')) {
    answer.classList.remove('show');
    setTimeout(() => {
      answer.style.display = 'none';
    }, 1000);
    plusIcon.textContent = '+';
  } else {
    answer.style.display = 'block';
    setTimeout(() => {
      answer.classList.add('show');
    }, 0);
    plusIcon.textContent = 'x';
  }
}