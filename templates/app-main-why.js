import {register} from '../kahlo.js';

register('app-main-why', (html, {title, description}) => html`
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
    <section class="vermelha" id="por-que">
    <h2>${title}</h2>
    <p>${description}</p>
    </section>
  </main>
`)
