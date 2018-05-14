import {register} from '../kahlo.js';

register('app-main-where', (html, {title, image}) => html`
  <style>
    section {
      padding: 20px 20px 70px 20px;
    }
    .vermelha {
      background-color: #CF2227;
    }
    .branca {
      color: #CF2227;
    }
    img {
      display: block;
      max-width: 600px;
      width: 100%;
      margin: auto;
    }
    p {
      margin: 0;
      font-weight: lighter;
    }
    h2 {
      font-weight: bold;
      font-size: 48px;
    }
  </style>
  <main>
    <section class="vermelha" id="onde">
      <h2>${title}</h2>
      <img src="${image.src}" alt="${image.description}"></img>
    </section>
  </main>
`)
