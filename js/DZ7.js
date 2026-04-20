const container = document.querySelector('.cards');

const cardInfo = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Произошла загрузка на сервере');
    }

    const data = await response.json();

    renderCards(data);

  } catch (error) {
    console.error(error);
    container.innerHTML = '<p>Ошибка загрузки данных</p>';
      }
};

const renderCards = (posts) => {
  container.innerHTML = '';

  posts.forEach(({ title, body }) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="https://www.corradi.eu/getattachment/d381ade5-acf8-45ae-8ddd-36a616efb8b3/image001-3-.jpg" alt="image">
      <h3>${title}</h3>
      <p>${body}</p>
    `;

    container.appendChild(card);
  });
};

document.addEventListener('DOMContentLoaded', cardInfo);