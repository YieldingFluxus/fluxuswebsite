<script lang="ts">
  import axios from 'axios';
  import translate from '../i18n';
  let soURL = 'https://yieldingfluxus.github.io/so-mirror/';
  // fetch('https://flux.li/android/external/so.txt', {
  //   mode: 'no-cors',
  // }).then(async (v) => {
  //   const str = await v.text();
  //   console.log(str);
  // });
  axios({
    url: 'https://flux.li/android/external/so.txt',
    withCredentials: false,
  })
    .then((v) => {
      console.log('got so via flux.li:', v.data);
      soURL = v.data || soURL;
    })
    .catch((errFluxLi) => {
      axios({
        url: 'https://so-mirror.astolfo.gay/so.txt',
        withCredentials: false,
      })
        .then((v) => {
          console.log('got so via backup:', v.data);
          soURL = v.data || soURL;
        })
        .catch((errMirror) =>
          console.error(
            'Failed to get so.txt\nError on flux.li:',
            errFluxLi,
            '\nError on so-mirror:',
            errMirror,
            '\nFalling back to backup download page (' + soURL + ').'
          )
        );
    });
  /** Copies the smali code to the clipboard */
  const copysmali = () =>
    navigator.clipboard.writeText(
      'const-string v0, "FluxusAndroid"\ninvoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V'
    );
</script>

<main>
  <div class="p1">
    <div>
      <h1>{translate('Legacy Installation')}</h1>
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
        src="https://www.youtube.com/embed/l6P-QL_4U5w"
        title="YouTube video player"
        frameborder="0"
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
        href="https://cdn.discordapp.com/attachments/1026462567792652330/1052157945409982494/bin.mt.plus_2.12.2.apk"
        target="_blank"
        rel="noopener noreferrer">MT Manager</a
      >
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
        style="border:none; width: 512px; max-width: 95vw;margin-bottom:-20px"
        frameborder="0"
      />
      <br />
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a on:click={copysmali} on:keypress={copysmali} href="javascript:void 0"
        >Copy Smali Code</a
      >
      <p class="september eleventh was an amazing day for every american">
        Make sure you delete the arm64-v8a folder and install
        libFluxusAndroid.so into armeabi-v7a! If you forget this, your
        application will crash.
        <br />
        <br />
        P.S. If you need help
        <a
          href="https://flux.li/discord.php"
          target="_blank"
          rel="noopener noreferrer"
          class="nobtn">join our discord server</a
        >
      </p>
    </div>
  </div>
</main>

<style lang="scss">
  .september.eleventh.was.an.amazing.day.for.every.american {
    max-width: 50vw;
  }
  @media screen and (max-width: 1000px) {
    .september.eleventh.was.an.amazing.day.for.every.american {
      max-width: 85vw;
    }
  }
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
