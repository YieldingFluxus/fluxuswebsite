<script lang="ts">
  import baseUrl from '../base';

  let soURL = '';
  fetch('https://flux.li/android/external/so.txt')
    .then((v) => v.text())
    .then((v) => (soURL = v));
</script>

<main>
  <div class="p1">
    <div>
      <h1>Legacy Installation</h1>
      <p>
        Is Fluxus Android not working?<br />
        Try this legacy installation method instead.
      </p>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">Installation</p>
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
      <h1>Instructions</h1>
      <p>
        Below, you can find a video with instructions on downloading Fluxus
        Android.
      </p>
      <iframe
        src="https://www.youtube.com/embed/eafNvvjVUhY?t=24"
        title="fluxus android legacy install"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
  <div class="p3">
    <div class="putmeonthetop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        fill="#ddddddaa"
        style="transform: rotate(180deg)"
      >
        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
      </svg>
      <p style="margin-top: -12px">Installation Instructions</p>
    </div>
    <div>
      <h1>Resources</h1>
      <a
        href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk"
        target="_blank"
        rel="noopener noreferrer">MT Manager</a
      ><br /><br />
      <a href={soURL} target="_blank" rel="noopener noreferrer"
        >libFluxusAndroid.so</a
      ><br /><br />
      <a
        href="https://apkcombo.com/roblox/com.roblox.client/download/apk"
        target="_blank"
        rel="noopener noreferrer">Roblox APK - APK Combo</a
      >
      <p>Smali Code:</p>
      <!-- svelte-ignore a11y-missing-attribute -->
      <iframe
        src="https://yieldingfluxus.github.io/smalipage"
        style="border:none; width: 512px; max-width: 95vw;"
        frameborder="0"
      />
      <br />
      <p>
        P.S. You can buy premium <a
          href="https://discord.gg/V7axDCK3q8"
          target="_blank"
          rel="noopener noreferrer"
          class="nobtn">in our discord</a
        > to skip the key system.
      </p>
    </div>
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
    iframe {
      width: 50vw;
      height: 50vh;
    }
    @media screen and (max-width: 1000px) {
      iframe {
        max-width: 75vw;
      }
    }
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
  .putmeonthetop {
    position: absolute;
    top: 44px;
    color: #ddddddaa;
    font-size: 1.05rem;
  }
</style>
