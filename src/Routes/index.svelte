<script lang="ts">
  import './index.scss';
  import { Link } from 'svelte-routing';
  import Fluxus73MainUI from '../assets/Fluxus_N8qYfLrYAx.png';
  import aui from '../assets/aui.png';
  import Icon from '../assets/faviconbutpng.png';
  const shouldDisableUI =
    navigator.userAgent.includes('Safari') ||
    navigator.userAgent.includes('iPhone');
</script>

<main class="index">
  <div class="page1">
    <div class="container">
      <img src={Icon} alt="Icon" />
      <div class="content">
        <h1 class="rev">
          <span class="c">A Fresh<br />Execution Experience.</span>
        </h1>
        <p class="👌👌👌 👌">Unrivaled Power, Unbeatable Pricepoint<br />​</p>
        <Link to="dl" class="active">
          <span class="text">Download now</span><span
            class="material-symbols-outlined icon"
          >
            arrow_forward_ios
          </span>
        </Link>
      </div>
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
        <h1>A Minimalistic UI</h1>
        <p>
          Useless features shouldn't take up your entire screen.<br />
          Only the most essential features are on the main UI - anything extra is
          just one more click away.
        </p>
      </div>
    </div>
  </div>
  <div class="page3">
    <div>
      <h1>99% of scripts simply<br />work.</h1>
      <p>
        With Fluxus, there's no need to look through dozens of pages of scripts
        to find one that supports your executor.<br />
        Our powerful execution core supports most scripts out-of-the-box.
      </p>
    </div>
  </div>
  <div class="page4">
    <img src={aui} alt="" style={shouldDisableUI ? 'display:none' : ''} />
    <div class="ok" style="position: relative; z-index: 50;">
      <h1>
        <underline
          style="text-decoration: underline; text-decoration-color: #705d8f"
          >The</underline
        > executor for mobile.
      </h1>
      <p>
        Fluxus Android brings the Premium Executor<br />Experience to your
        pocket. For free.
      </p>
      <br />
      <Link to="android" class="active">
        <span class="nomobile"
          ><span class="text">Get Fluxus Android</span>
        </span><span class="material-symbols-outlined icon">
          arrow_forward_ios
        </span>
      </Link>
    </div>
  </div>
</main>
