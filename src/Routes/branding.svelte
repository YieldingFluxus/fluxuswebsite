<main>
  <div class="p1">
    <div>
      <h1>Branding</h1>
      <p>
        Below, you can find branding resources for Fluxus, to use in press &
        similar.
      </p>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">Icons</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        fill="#ddddddaa"
      >
        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
      </svg>
    </div>
  </div>
  <div class="p2">
    <div>
      <h1>Icons</h1>
      <p>Below, you can find a list of icons</p>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">UIs</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        fill="#ddddddaa"
      >
        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
      </svg>
    </div>
  </div>
  <div class="p3">
    <div>tba</div>
  </div>
</main>

<style lang="scss">
  .p1,
  .p2,
  .p3 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    background: #191a27;

    h1 {
      color: rgb(141, 115, 176);
    }

    p {
      font-weight: 400;
      color: #a5adcb;
      font-size: 1.2em;
    }
  }
  .p1 {
    min-height: calc(100vh - 54px);
  }
  .p2 {
    min-height: 100vh;
    background: #24273a;
  }
  .p3 {
    min-height: 100vh;
    background: #1e2030;
    a:not(.nobtn) {
      color: rgb(202, 211, 245);
      text-decoration: none;
      padding: 8px 8px;
      background: rgb(141, 115, 176);
      /*border-radius: 16px;*/
    }
    a.nobtn {
      color: rgb(202, 211, 245);
    }
  }
  .putmeonthebottom {
    position: absolute;
    bottom: 0;
    color: #ddddddaa;
    font-size: 1.05rem;
  }
</style>
