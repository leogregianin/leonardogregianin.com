function createCard({ title, tag, description, link, linkLabel }) {
  const externalLinkIcon = '<span class="external-link-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>';
  const cardLink = link
    ? `<a href="${link}" target="_blank" rel="noreferrer">${linkLabel ?? 'Abrir'}${externalLinkIcon}</a>`
    : `<span class="card-link-label">${linkLabel ?? ''}</span>`;

  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="card-top">
      <span class="tag">${tag ?? title}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="card-links">
      ${cardLink}
    </div>
  `;
  return article;
}

const copyFeedbackTimeouts = new WeakMap();

function resolveLocalizedValue(value, language) {
  if (typeof value === 'string') {
    return value;
  }

  if (!value) {
    return '';
  }

  return value[language] ?? value.pt ?? value.en ?? '';
}

const socialIcons = {
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
};

function buildEmailAddress(emailParts) {
  if (!emailParts) {
    return '';
  }

  const { local, domain, tld } = emailParts;

  if (!local || !domain || !tld) {
    return '';
  }

  return `${local}@${domain}.${tld}`;
}

function createSocialCard({ title, description, link, icon, linkLabel, emailParts, revealLabel, hideLabel }) {
  const iconMarkup = socialIcons[icon] ?? '';
  const externalLinkIcon = '<span class="external-link-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>';
  const isEmail = icon === 'email';
  const linkAttributes = isEmail ? '' : 'target="_blank" rel="noreferrer"';
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="card-top">
      <span class="social-icon">${iconMarkup}</span>
      <span class="tag">${title}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    ${isEmail ? '<p class="email-display" data-email-output hidden></p>' : ''}
    <div class="card-links">
      ${isEmail ? `<a href="#" data-reveal-email="true" data-email-local="${emailParts?.local ?? ''}" data-email-domain="${emailParts?.domain ?? ''}" data-email-tld="${emailParts?.tld ?? ''}" data-show-label="${revealLabel ?? 'Mostrar email'}" data-hide-label="${hideLabel ?? 'Esconder email'}">${revealLabel ?? 'Mostrar email'}</a>` : ''}
      <a href="${isEmail ? '#' : link}" ${linkAttributes} ${isEmail ? `data-copy-email="true" data-copy-original-label="${linkLabel ?? 'Abrir perfil'}" data-email-local="${emailParts?.local ?? ''}" data-email-domain="${emailParts?.domain ?? ''}" data-email-tld="${emailParts?.tld ?? ''}"` : ''}>${linkLabel ?? 'Abrir perfil'}${isEmail ? '' : externalLinkIcon}</a>
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
const languageButtons = document.querySelectorAll('[data-language]');
const sections = {
  contactTitle: document.querySelector('#contato .section-title'),
  contactNote: document.querySelector('#contato .section-note'),
  projectsTitle: document.querySelector('#projetos .section-title'),
  projectsNote: document.querySelector('#projetos .section-note'),
  librariesTitle: document.querySelector('#bibliotecas .section-title'),
  librariesNote: document.querySelector('#bibliotecas .section-note'),
  articlesTitle: document.querySelector('#artigos .section-title'),
  articlesNote: document.querySelector('#artigos .section-note'),
};
const brandSubtitle = document.querySelector('.brand-subtitle');
const footer = document.querySelector('.footer span');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const themeToggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;

const projectGrid = document.getElementById('projects-grid');
const librariesGrid = document.getElementById('libraries-grid');
const articlesGrid = document.getElementById('articles-grid');
const socialGrid = document.getElementById('social-grid');

socialGrid.addEventListener('click', async (event) => {
  const copyLink = event.target.closest('a[data-copy-email="true"]');
  const revealLink = event.target.closest('a[data-reveal-email="true"]');

  if (revealLink) {
    event.preventDefault();

    const emailAddress = buildEmailAddress({
      local: revealLink.getAttribute('data-email-local'),
      domain: revealLink.getAttribute('data-email-domain'),
      tld: revealLink.getAttribute('data-email-tld'),
    });
    const output = revealLink.closest('.card')?.querySelector('[data-email-output]');
    const showLabel = revealLink.getAttribute('data-show-label') ?? 'Mostrar email';
    const hideLabel = revealLink.getAttribute('data-hide-label') ?? 'Esconder email';

    if (output) {
      if (output.hidden) {
        if (emailAddress) {
          output.textContent = emailAddress;
          output.hidden = false;
          revealLink.textContent = hideLabel;
        }
      } else {
        output.hidden = true;
        output.textContent = '';
        revealLink.textContent = showLabel;
      }
    }

    return;
  }

  if (!copyLink) {
    return;
  }

  const emailAddress = buildEmailAddress({
    local: copyLink.getAttribute('data-email-local'),
    domain: copyLink.getAttribute('data-email-domain'),
    tld: copyLink.getAttribute('data-email-tld'),
  });

  if (!emailAddress) {
    return;
  }

  event.preventDefault();

  try {
    await navigator.clipboard.writeText(emailAddress);

    const originalLabel = copyLink.getAttribute('data-copy-original-label') ?? copyLink.textContent ?? '';
    const copiedLabel = getCurrentLanguage() === 'en' ? '✅ Copied' : '✅ Copiado';

    copyLink.textContent = copiedLabel;

    const previousTimeout = copyFeedbackTimeouts.get(copyLink);
    if (previousTimeout) {
      clearTimeout(previousTimeout);
    }

    const resetTimeout = window.setTimeout(() => {
      copyLink.textContent = originalLabel;
      copyFeedbackTimeouts.delete(copyLink);
    }, 1800);

    copyFeedbackTimeouts.set(copyLink, resetTimeout);
  } catch {
    window.location.href = `mailto:${emailAddress}`;
  }
});

function getCurrentLanguage() {
  return localStorage.getItem('site-language') ?? siteData.defaultLanguage;
}

function getCurrentTheme() {
  const savedTheme = localStorage.getItem('site-theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
}

function updateThemeButton(language, theme) {
  if (!themeToggleButton) {
    return;
  }

  const labels = {
    pt: {
      toDark: 'Ativar dark mode',
      toLight: 'Ativar modo claro',
    },
    en: {
      toDark: 'Enable dark mode',
      toLight: 'Enable light mode',
    },
  };

  const selectedLabels = labels[language] ?? labels.pt;
  const isDark = theme === 'dark';

  themeToggleButton.setAttribute('aria-label', isDark ? selectedLabels.toLight : selectedLabels.toDark);
  themeToggleButton.setAttribute('aria-pressed', String(isDark));
}

function renderTheme(theme, language = getCurrentLanguage()) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('site-theme', theme);
  updateThemeButton(language, theme);
}

function buildCardData(item, language) {
  return {
    title: resolveLocalizedValue(item.title, language),
    tag: resolveLocalizedValue(item.tag, language),
    description: resolveLocalizedValue(item.description, language),
    link: item.link,
    linkLabel: resolveLocalizedValue(item.linkLabel, language),
    revealLabel: resolveLocalizedValue(item.revealLabel, language),
    hideLabel: resolveLocalizedValue(item.hideLabel, language),
    emailParts: item.emailParts,
    icon: item.icon,
  };
}

function renderLanguage(language) {
  const ui = siteData.ui[language] ?? siteData.ui[siteData.defaultLanguage];

  root.lang = language === 'en' ? 'en' : 'pt-BR';
  brandSubtitle.textContent = ui.brandSubtitle;
  navLinks[0].textContent = ui.nav.contact;
  navLinks[1].textContent = ui.nav.projects;
  navLinks[2].textContent = ui.nav.libraries;
  navLinks[3].textContent = ui.nav.articles;

  sections.contactTitle.textContent = ui.sections.contactTitle;
  sections.contactNote.textContent = ui.sections.contactNote;
  sections.projectsTitle.textContent = ui.sections.projectsTitle;
  sections.projectsNote.textContent = ui.sections.projectsNote;
  sections.librariesTitle.textContent = ui.sections.librariesTitle;
  sections.librariesNote.textContent = ui.sections.librariesNote;
  sections.articlesTitle.textContent = ui.sections.articlesTitle;
  sections.articlesNote.textContent = ui.sections.articlesNote;
  footer.textContent = ui.footer;
  updateThemeButton(language, getCurrentTheme());

  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.language === language);
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });

  projectGrid.innerHTML = '';
  librariesGrid.innerHTML = '';
  articlesGrid.innerHTML = '';
  socialGrid.innerHTML = '';

  projects.forEach((project) => projectGrid.appendChild(createCard(buildCardData(project, language))));
  shuffle(libraries).forEach((library) => librariesGrid.appendChild(createCard(buildCardData(library, language))));
  articles.forEach((article) => articlesGrid.appendChild(createCard(buildCardData(article, language))));
  socials.forEach((social) =>
    socialGrid.appendChild(
      createSocialCard({
        ...buildCardData(social, language),
        linkLabel: resolveLocalizedValue(social.linkLabel, language) || ui.socialLinkLabel,
      }),
    ),
  );
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    renderTheme(nextTheme, getCurrentLanguage());
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.dataset.language;
    localStorage.setItem('site-language', selectedLanguage);
    renderLanguage(selectedLanguage);
  });
});

renderLanguage(getCurrentLanguage());
renderTheme(getCurrentTheme(), getCurrentLanguage());