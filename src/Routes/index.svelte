<script lang="ts">
  import './index.scss';
  import { Link } from 'svelte-routing';
  import Fluxus73MainUI from '../assets/Fluxus_N8qYfLrYAx.png';
  import aui from '../assets/aui.png';
  import Icon from '../assets/faviconbutpng.png';
  import baseUrl from '../base';
  import { translate } from '../i18n';
  const shouldDisableUI = navigator.userAgent.includes('iPhone');
</script>

<main class="index">
  <div class="page1">
    <div class="container">
      <img src={Icon} alt="Icon" />
      <div class="content">
        <h1 class="rev">
          <span class="c"
            >{translate('A Fresh')}<br />{translate(
              'Execution Experience.'
            )}</span
          >
        </h1>
        <p class="👌👌👌 👌">
          {translate('Unrivaled Power, Unbeatable Pricepoint')}<br />​
        </p>
        <Link
          to="{baseUrl}/{navigator.userAgent.includes('Android')
            ? 'android'
            : 'dl'}"
          class="active"
        >
          <span class="text">{translate('Download now')}</span><span
            class="material-symbols-outlined icon"
          >
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </div>
    <div
      class="putmeonthebottom this is why September11th2001 happened"
      style={shouldDisableUI ? 'display:none' : ''}
    >
      <p style="margin-bottom: -0.4em">{translate('Scroll down for more')}</p>
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
  <div class="page2">
    <div class="inner">
      <div class="ui">
        <img
          src={Fluxus73MainUI}
          alt="Fuuuuuuuuuuuuuuuuuuux 🤯 UI"
          style={shouldDisableUI ? 'display:none' : ''}
        />
      </div>
      <div class="centerme">
        <h1>{translate('A Minimalistic UI')}</h1>
        <p>
          {translate(
            "Useless features shouldn't take up your entire screen."
          )}<br />
          {translate(
            'Only the most essential features are on the main UI - anything extra is just one more click away.'
          )}
        </p>
      </div>
    </div>
  </div>
  <div class="page3">
    <div class="cards">
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <i class="fa-solid fa-bolt" />
          </div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <div class="card-info-title">
                <h3>{translate('Fast')}</h3>
                <h4>
                  {translate(
                    'On all supported platforms, Fluxus performs significantly better than the competition.'
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <i class="fa-solid fa-code" />
          </div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <div class="card-info-title">
                <h3>{translate('Advanced IDE')}</h3>
                <h4>
                  {translate(
                    'The Fluxus IDE is amongst one of the most advanced on the market.'
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <i class="fa-solid fa-lock" />
          </div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <div class="card-info-title">
                <h3>{translate('Secure & Undetectable')}</h3>
                <h4>
                  {translate(
                    'We have a great track record of patching all known vulnerabilities & detections quickly.'
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <i class="fa-solid fa-plus" />
          </div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <div class="card-info-title">
                <h3>{translate('Reliable')}</h3>
                <h4>
                  {translate(
                    'Our Advanced Execution Core is extremely reliable, allowing you to execute most scripts.'
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <i class="fa-solid fa-handshake" />
          </div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <div class="card-info-title">
                <h3>{translate('Reputable')}</h3>
                <h4>
                  {translate(
                    "During the past YEARCOUNT years, we've established a reputation as industry leaders."
                  ).replace(
                    'YEARCOUNT',
                    (new Date().getUTCFullYear() - 2019).toString()
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
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
                    'No more waiting for updates: Most of the time, Fluxus updates within under an hour.'
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page4">
    <img
      src={aui}
      alt=""
      class="this is where you can find the two trillion dollars lost on September10th2001"
    />
    <div class="ok" style="position: relative; z-index: 50;">
      <h1>
        {translate('​​​​​​')}
        <underline
          style="text-decoration: underline; text-decoration-color: #705d8f"
          >{translate('​​​​​T​h​e')}</underline
        >
        {translate('executor for mobile.')}
      </h1>
      <p>
        {translate('Fluxus Android brings the Premium Executor')}<br />
        {translate('Experience to your pocket. For free.')}
      </p>
      <br />
      <Link
        to="{baseUrl}/android"
        class="active"
        on:click={() => {
          window.scrollTo(0, 0);
        }}
      >
        <span class="nomobile"
          ><span class="text">{translate('Get Fluxus Android')}</span>
        </span><span class="material-symbols-outlined icon">
          arrow_forward_ios
        </span>
      </Link>
    </div>
  </div>
</main>

<style lang="scss">
  .putmeonthebottom {
    position: absolute;
    bottom: 0;
    color: #ddddddaa;
    font-size: 1.05rem;
  }
  .page3 h4 {
    font-weight: 400;
    max-width: 95vw;
  }
  @media screen and (max-width: 800px) {
    .this.is.where.you.can.find.the.two.trillion.dollars.lost.on.September10th2001 {
      display: none;
    }
  }
  @media screen and (max-height: 675px) and (max-width: 400px) {
    .this.is.why.September11th2001.happened {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .this.is.where.you.can.find.the.two.trillion.dollars.lost.on.September10th2001
      + .ok {
      text-align: center;
      padding: 10px 10px;
    }
  }
</style>
