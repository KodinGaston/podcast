import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

export async function createHtml() {
  const podCasts = await getPodcasts();
  if (!podCasts) return;

  podCasts.programs.forEach((podcast) => {
    const innerArticle = createInnerArticle();
    createImg(innerArticle, podcast.socialimage, podcast.name);  
    const textDiv = createTextDiv(innerArticle);
    createHeader(textDiv, podcast.name);
    createP(textDiv, podcast.description);
    createLink(textDiv, podcast.programurl);
  });
}

function createInnerArticle() {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'section__article-innerarticle');
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv(innerArticle: HTMLElement) {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'section__article-div');
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createLink(textDiv: HTMLElement, programUrl: string) {
  const linkPlacement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', programUrl);
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

function createImg(innerArticle: HTMLElement, imageUrl: string, altText: string) {
  const imgPlacement = document.createElement('IMG');
  imgPlacement.setAttribute('src', imageUrl);
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.setAttribute('alt', `Cover image for ${altText} podcast`);
  innerArticle.appendChild(imgPlacement);
}

function createP(textDiv: HTMLElement, description: string) {
  const descPlacement = document.createElement('p');
  const desc = document.createTextNode(description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createHeader(textDiv: HTMLElement, name: string) {
  const headerPlacement = document.createElement('h2');
  const programName = document.createTextNode(name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}

export default createHtml;
