import { register } from '../kahlo.js';
register('app-header', html => html`
  <style>
    header {
      background-color: gray;
      background-image: url("fundo.jpg");
      background-size: cover;
      height: 400px;
    }
    header {
      padding: 20px 20px 70px 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline;
      padding: 5px;
    }
    nav {
      margin-bottom: 80px;
    }
    p {
      margin: 0;
      font-weight: lighter;
    }
    h1 {
      font-size: 24px;
    }
    button {
      color: white;
      background-color: transparent;
      font-weight: bold;
      margin-top: 20px;
      padding: 10px;
      font-size: 18px;
    }
    button:hover {
      background-color: gray;
    }
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    .data {
      font-size: 64px;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li>
          <a href="/porque">POR QUÊ</a>
        </li>
        <li>
          <a href="/quando">QUANDO</a>
        </li>
        <li>
          <a href="/onde">ONDE</a>
        </li>
        <li>
          <a href="/quem">QUEM SOMOS</a>
        </li>
      </ul>
    </nav>

    <h1>#GreveGeral</h1>
    <p class="data">30 de junho</p>
    <p class="chamada">O Brasil vai parar mais uma vez</p>
    <a href='apoio.html'>
      <button>EU APOIO</button>
    </a>
  </header>
`);