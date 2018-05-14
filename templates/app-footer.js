import {register} from '../kahlo.js';

register('app-footer', (html) => html`
  <style>
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline;
      padding: 5px;
    }
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    .vermelha {
      background-color: #CF2227;
    }
    footer {
      padding: 20px 20px 70px 20px;
    }
  </style>
  <footer class="vermelha">
    <ul>
      <li><a href="https://pt-br.facebook.com/brasildefato/">Facebook</a></li>
      <li><a href="https://twitter.com/brasil_de_fato">Twitter</a></li>
    </ul>
  </footer>
`)
