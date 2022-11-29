<script lang="ts">
  import { Link } from 'svelte-routing';
  import baseUrl from '../base';
  const openAndroidBenchmark = () => {};
  const openDocs = () =>
    window.open(
      'https://github.com/YieldingFluxus/android-documentation/tree/main/Developers'
    );
  const openUNC = () => window.open('https://scriptunc.org');
</script>

<main>
  <div class="p1" id="android-normal-top">
    <div>
      <h1>A Unique Mobile Experience.</h1>
      <p>
        Crafted by industry leaders, Fluxus Android is the ultimate android
        experience.
      </p>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">Features</p>
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
  <div class="p2" id="android-normal-feature-list">
    <div>
      <h1>Why pick Fluxus Android?</h1>
      <div class="cards">
        <div
          class="card"
          on:click={openAndroidBenchmark}
          on:keypress={openAndroidBenchmark}
          style="cursor: auto"
        >
          <div class="card-content">
            <div class="card-image">
              <i class="fa-solid fa-bolt" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <div class="card-info-title">
                  <h3>Performant</h3>
                  <h4>
                    Fluxus Android is powered by the Luau Source directly,
                    allowing us to reach insanely fast performance.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" on:click={openDocs} on:keypress={openDocs}>
          <div class="card-content">
            <div class="card-image">
              <i class="fa-solid fa-code" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <div class="card-info-title">
                  <h3>Extensive APIs</h3>
                  <h4>
                    Fluxus has many custom APIs, allowing you to do things like
                    integrate into the main UI. You can click here for
                    documentation.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="cursor: auto">
          <div class="card-content">
            <div class="card-image">
              <i class="fa-solid fa-key" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <div class="card-info-title">
                  <h3>Short Key System</h3>
                  <h4>
                    Our Key System consists of only two linkvertises, and keys
                    last 24 hours! You can also buy Premium to remove the key
                    system!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" on:click={openUNC} on:keypress={openUNC}>
          <div class="card-content">
            <div class="card-image">
              <i class="fa-solid fa-check" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <div class="card-info-title">
                  <h3>UNC-Support</h3>
                  <h4>
                    We support a significant portion of UNC; the Unified Naming
                    Convention. This means most scripts will work out of the
                    box!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="cursor: auto">
          <div class="card-content">
            <div class="card-image">
              <i class="fa-solid fa-handshake" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <div class="card-info-title">
                  <h3>Fluxus Quality</h3>
                  <h4>
                    We make sure every product of ours is extremely
                    high-quality, giving you the ultimate experience.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="cursor: auto">
          <div class="card-content">
            <div class="card-image">
              <i class="fa-solid fa-circle-up" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <div class="card-info-title">
                  <h3>Fast Updates</h3>
                  <h4>
                    No more waiting for updates; Most of the time, Fluxus
                    Android updates within under an hour.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  <div class="p3" id="android-normal-installation-resources">
    <div>
      <h1>Installation</h1>
      <a
        href="https://cdn.discordapp.com/attachments/1034304168409714720/1044159840165044234/Fluxus.apk"
        target="_blank"
        rel="noopener noreferrer"
        class="yesbtn">Fluxus APK</a
      >
      <Link to="{baseUrl}/android/roblox-mirrors" class="nobtn"
        ><span class="yesbtn">Roblox APK</span></Link
      >
      <a href="#android-normal-instruction-video">Instructions</a><br /><br />
      <p>
        Having issues with Fluxus Android? Try the <Link
          to="{baseUrl}/android/legacy">Legacy Installation</Link
        >
      </p>
      <p>
        P.S. You can buy premium <a
          href="https://discord.gg/V7axDCK3q8"
          target="_blank"
          rel="noopener noreferrer"
          class="nobtn">in our discord</a
        > to skip the key system.
      </p>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">Instructions</p>
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
  <div class="p4" id="android-normal-instruction-video">
    <div>
      <h1>Instructions</h1>
      <p>
        Below, you can find a video with instructions on downloading Fluxus
        Android.<br />
        Scroll up for links.
      </p>
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        src="{baseUrl}/android-current.mp4"
        controls
        style="/*border-radius: 16px;*/"
      />
    </div>
  </div>
</main>

<style lang="scss">
  // .p1 {
  //   img {
  //     max-height: 50vh;
  //     max-width: 90vw;
  //     position: absolute;
  //     left: 50vw;
  //     top: calc(50vh - 48px);
  //     transform: translate(-50%, -50%);
  //     filter: blur(16px);
  //   }
  //   .ontop {
  //     z-index: 1;
  //     position: absolute;
  //     left: 50vw;
  //     top: calc(50vh - 48px);
  //     transform: translate(-50%, -50%);
  //     padding: 30px 30px;
  //     background: #191a27aa;
  //     border-radius: 16px;
  //   }
  // }
  .p1,
  .p2,
  .p3,
  .p4 {
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
    background: #1e2030;
  }
  .p3 {
    min-height: 100vh;
    background: #24273a;
  }
  .p4 {
    min-height: 100vh;
    background: #1e2030;
    video {
      max-width: 50vw;
    }
    @media screen and (max-width: 1000px) {
      video {
        max-width: 75vw;
      }
    }
  }
  main {
    .yesbtn,
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
