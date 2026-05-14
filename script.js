function createCard({ title, tag, description, link, linkLabel }) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="card-top">
      <span class="tag">${tag ?? title}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="card-links">
      <a href="${link}" target="_blank" rel="noreferrer">${linkLabel ?? 'Abrir'}</a>
    </div>
  `;
  return article;
}

function createSocialCard({ title, description, link }) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="card-top">
      <span class="tag">${title}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="card-links">
      <a href="${link}" target="_blank" rel="noreferrer">Abrir perfil</a>
    </div>
  `;
  return article;
}

function shuffle(arr) {
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

const { socials, projects, libraries, articles } = siteData;

const projectGrid = document.getElementById('projects-grid');
const librariesGrid = document.getElementById('libraries-grid');
const articlesGrid = document.getElementById('articles-grid');
const socialGrid = document.getElementById('social-grid');

projects.forEach((project) => projectGrid.appendChild(createCard(project)));
shuffle(libraries).forEach((library) => librariesGrid.appendChild(createCard(library)));
articles.forEach((article) => articlesGrid.appendChild(createCard(article)));
socials.forEach((social) => socialGrid.appendChild(createSocialCard(social)));