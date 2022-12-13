<script lang="ts">
  import { Link } from 'svelte-routing';
  import baseUrl from '../base';
  import translate from '../i18n';
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
      <h1>{translate('A Unique Mobile Experience.')}</h1>
      <p>
        {translate(
          'Crafted by industry leaders, Fluxus Android is the ultimate Roblox Exploiting experience for your pocket.'
        )}
      </p>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">{translate('Features')}</p>
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
      <h1>{translate('Why pick Fluxus Android?')}</h1>
      <div style="display:flex;margin-bottom: 40px;" class="cardcont">
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
                    <h3>{translate('Performant')}</h3>
                    <h4>
                      {translate(
                        'Fluxus Android is powered by the Luau Source directly, allowing us to reach insanely fast performance.'
                      )}
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
                    <h3>{translate('Extensive APIs')}</h3>
                    <h4>
                      {translate(
                        'Fluxus has many custom APIs, allowing you to do things like integrate into the main UI. You can click here for documentation.'
                      )}
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
                    <h3>{translate('Short Key System')}</h3>
                    <h4>
                      {translate(
                        'Our Key System consists of only three linkvertises, and keys last 24 hours! You can also buy Premium to remove the key system!'
                      )}
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
                    <h3>{translate('UNC-Support')}</h3>
                    <h4>
                      {translate(
                        'We support a significant portion of UNC; this means most modern scripts will work out of the box!'
                      )}
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
                    <h3>{translate('Fluxus Quality')}</h3>
                    <h4>
                      {translate(
                        'We make sure every product of ours is extremely high-quality, giving you the ultimate experience.'
                      )}
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
                    <h3>{translate('Fast Updates')}</h3>
                    <h4>
                      {translate(
                        'No more waiting for updates; Most of the time, Fluxus Android updates within under an hour.'
                      )}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">{translate('Installation')}</p>
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
      <h1>{translate('Installation')}</h1>
      <a
        href="https://linkvertise.com/530799/fluxus-android-download/1"
        target="_blank"
        rel="noopener noreferrer"
        class="yesbtn">Fluxus APK</a
      >

      <Link to="{baseUrl}/android/roblox-mirrors" class="nobtn"
        ><span class="yesbtn">Roblox APK</span></Link
      >

      <a href="#android-normal-instruction-video">{translate('Instructions')}</a
      ><br /><br /><br />

      <a
        href="https://flux.li/discord.php"
        target="_blank"
        rel="noopener noreferrer"
        class="yesbtn">{translate('Help')}</a
      >

      <p>
        {translate('Having issues with Fluxus Android? Try the')}
        <Link to="{baseUrl}/android/legacy"
          >{translate('Legacy Installation')}</Link
        >
      </p>
      <p>
        {translate('P.S. You can buy premium')}
        <a
          href="https://flux.li/discord.php"
          target="_blank"
          rel="noopener noreferrer"
          class="nobtn">{translate('in our discord')}</a
        >
        {translate('to skip the key system.')}
      </p>
    </div>

    <div class="putmeonthebottom">
      <p style="margin-bottom: -0.4em">{translate('Instructions')}</p>
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
      <h1>{translate('Instructions')}</h1>
      <p>
        {translate(
          'Below, you can find a video with instructions on downloading Fluxus Android.'
        )}<br />
        {translate('Scroll up for links.')}
      </p>
      <!-- svelte-ignore a11y-media-has-caption -->

      <iframe
        width="1024"
        height="576"
        style="max-height: 75vh; max-width: 75vw"
        src={translate('https://www.youtube.com/embed/d6V2rHDSJM4')}
        title="[MOBILE] How to install Fluxus Android - FULL TUTORIAL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</main>

<style lang="scss">
  main {
    overflow: hidden;
  }
  @media screen and (max-width: 1000px) {
    .cards {
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 500px) {
    .cards {
      margin: 10px 10px !important;
      margin-bottom: 40px !important;
    }
  }
  // .cards {
  //   max-width: 995px !important;
  // }
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
    div {
      max-width: calc(100vw - 30px);
    }
    @media screen and (min-width: 900px) {
      div {
        max-width: 40vw;
      }
    }
  }
  .p2 {
    min-height: 100vh;
    background: #1e2030;
    h1 {
      max-width: 99vw;
      padding: 10px 10px;
    }
  }
  .p3 {
    min-height: 100vh;
    background: #24273a;
    max-width: 100vw;
    h1 {
      max-width: 99vw;
      padding: 10px 10px;
    }
  }
  .p4 {
    min-height: 100vh;
    background: #1e2030;
    iframe {
      max-width: 50vw;
    }
    @media screen and (max-width: 1000px) {
      iframe {
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
  // .p1 .putmeonthebottom {
  //   bottom: -42px;
  // }
  .putmeonthebottom {
    position: absolute;
    bottom: 0;
    color: #ddddddaa;
    font-size: 1.05rem;
  }
</style>
