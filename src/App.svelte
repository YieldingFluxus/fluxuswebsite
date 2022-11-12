<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  // @ts-ignore
  import Home from './Routes/index.svelte';
  import Favicon from './assets/logo.png';
  import Android from './Routes/android.svelte';
  import AndroidLegacy from './Routes/android.legacy.svelte';
  import Download from './Routes/download.svelte';
  import Acknowledgements from './Routes/acknowledgements.svelte';
  import baseUrl from './base';

  let windowHeight;
  setInterval(() => {
    windowHeight = Math.min(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  }, 500);
  const updateScroll = () => {
    if (!windowHeight || Math.floor(windowHeight) === 0)
      windowHeight = window.screenY;
    document.body.setAttribute(
      'data-z',
      window.scrollY === 0 ? 'true' : 'false'
    );
    document.body.setAttribute(
      'data-n',
      Math.floor((window.scrollY + 64) / windowHeight).toString()
    );
    document.body.setAttribute(
      'data-nb',
      Math.floor((window.scrollY + windowHeight) / windowHeight).toString()
    );
  };

  window.addEventListener('scroll', updateScroll);
  updateScroll();

  // discord & whatnot
  export let url = '';
  let discord = 'https://discord.gg/GNHbGPbah2';
  fetch('https://fluxteam.net/external-files/discord.php')
    .then((resp) => resp.text())
    .then((resp) => (discord = `https://discord.gg/${resp}`));
</script>

<Router {url}>
  <div class="navContainer">
    <nav>
      <Link to="{baseUrl}/"
        ><span class="cont"
          ><img
            src={Favicon}
            alt="Fluxus"
            style="height: 1.4em;transform: scale(1.5);padding-top:1px;"
          /></span
        ></Link
      >
      <Link to="{baseUrl}/dl" class="nomobile"
        ><span class="cont">Download</span></Link
      >
      <Link to="{baseUrl}/android"><span class="cont">Android</span></Link>
      <a href={discord} class="nomobile"><span class="cont">Discord</span></a>
    </nav>
  </div>
  <div class="page">
    <Route path="/"><Home /></Route>
    <Route path="/dl"><Download /></Route>
    <Route path="/android"><Android /></Route>
    <Route path="/android/install"><Android /></Route>
    <Route path="/android/install.html"><Android /></Route>
    <Route path="/android/legacy"><AndroidLegacy /></Route>
    <Route path="/android/legacy.html"><AndroidLegacy /></Route>
    <Route path="/acknowledgements"><Acknowledgements /></Route>
    <Route path="{baseUrl}/"><Home /></Route>
    <Route path="{baseUrl}/dl"><Download /></Route>
    <Route path="{baseUrl}/android"><Android /></Route>
    <Route path="{baseUrl}/android/install"><Android /></Route>
    <Route path="{baseUrl}/android/install.html"><Android /></Route>
    <Route path="{baseUrl}/android/legacy"><AndroidLegacy /></Route>
    <Route path="{baseUrl}/android/legacy.html"><AndroidLegacy /></Route>
    <Route path="{baseUrl}/acknowledgements"><Acknowledgements /></Route>
  </div>
</Router>
