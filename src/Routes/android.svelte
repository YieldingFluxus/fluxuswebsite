<main>
  <div class="p1">
    <div>
      <h1>A Unique Mobile Experience.</h1>
      <p>
        Crafted by industry leaders, Fluxus Android is the ultimate android
        experience.
      </p>
    </div>
  </div>
  <div class="p2">
    <div>
      <h1>Instructions</h1>
      <p>
        Below, you can find a video with instructions on downloading Fluxus
        Android.
      </p>
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        src="https://cdn.discordapp.com/attachments/1037510861369118841/1037515767429726268/2022-11-02_19-55-01.mp4"
        controls
        style="/*border-radius: 16px;*/"
      />
    </div>
  </div>
  <div class="p3">
    <div>
      <h1>Resources</h1>
      <a
        href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk"
        target="_blank"
        rel="noopener noreferrer">MT Manager</a
      ><br /><br />
      <a
        href="https://cdn.discordapp.com/attachments/1026465307683987537/1037911047362842694/libFluxusAndroid.so"
        target="_blank"
        rel="noopener noreferrer">libFluxusAndroid.so</a
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
          href="https://discord.gg/sMjjsX4P"
          target="_blank"
          rel="noopener noreferrer">in our discord</a
        > to skip the key system.
      </p>
    </div>
  </div>
</main>

<style lang="scss">
  .p1,
  .p2,
  .p3 {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

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
  .p2 {
    background: #24273a;
    video {
      max-width: 50vw;
    }
    @media screen and (max-width: 1000px) {
      video {
        max-width: 75vw;
      }
    }
  }
  .p3 {
    background: #24273a;
    a {
      color: rgb(202, 211, 245);
      text-decoration: none;
      padding: 8px 8px;
      background: rgb(141, 115, 176);
      /*border-radius: 16px;*/
    }
  }
</style>
