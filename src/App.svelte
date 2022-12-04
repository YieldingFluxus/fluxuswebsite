<!-- App.svelte -->
<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
  // @ts-ignore
  import Home from './Routes/index.svelte';
  import Favicon from './assets/logo.png';
  import Android from './Routes/android.svelte';
  import AndroidLegacy from './Routes/android.legacy.svelte';
  import AndroidMirrors from './Routes/android.mirrors.svelte';
  import AndroidSign from './Routes/android.sign.svelte';
  import Download from './Routes/download.svelte';
  import Acknowledgements from './Routes/acknowledgements.svelte';
  import baseUrl from './base';

  // easter egg
  if (
    localStorage.getItem('og-vibes') ||
    document.location.href.includes('use-og-vibes=true')
  )
    if (document.location.href.includes('/dl'))
      if (confirm('The old layout breaks things - Are you sure?')) {
        document.body.style.background =
          'url(https://cdn.discordapp.com/attachments/922892706638872617/928031837446635600/New_Project_37_FFCA699.png) no-repeat 50%';
      } else localStorage.removeItem('og-vibes');

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
  const attrCache = {};
  const updateAttribute = (k: string, v: string) => {
    if (attrCache[k] === v) return;
    document.body.setAttribute(k, v);
    attrCache[k] = v;
  };
  const updateScroll = () => {
    if (!windowHeight || Math.floor(windowHeight) === 0)
      windowHeight = window.screenY;
    updateAttribute('data-z', window.scrollY === 0 ? 'true' : 'false');
    updateAttribute(
      'data-pn',
      Math.floor((window.scrollY + 256) / windowHeight).toString()
    );
    updateAttribute(
      'data-n',
      Math.floor((window.scrollY + 64) / windowHeight).toString()
    );
    updateAttribute(
      'data-nb',
      Math.floor((window.scrollY + windowHeight) / windowHeight).toString()
    );
  };

  window.addEventListener('scroll', updateScroll);
  updateScroll();

  if (navigator.userAgent.includes('Chrome/')) {
    const v = document.createElement('style');
    v.innerHTML = `.cont img{padding-left:4px}`;
    document.head.appendChild(v);
  }
  if (!navigator.userAgent.includes('Firefox/')) {
    const v = document.createElement('style');
    v.innerHTML = `.page1 {backdrop-filter:none !important;background:linear-gradient(135deg,#181926,#1e2030);}`;
    document.head.appendChild(v);
  }

  // discord & whatnot
  export let url = '';
  let discord = 'https://discord.gg/GNHbGPbah2';
  fetch('https://fluxteam.net/external-files/discord.php')
    .then((resp) => resp.text())
    .then((resp) => (discord = `https://discord.gg/${resp}`));

  let debounce = [];
  setInterval(() => {
    document.querySelectorAll('.cards').forEach((v) => {
      if (debounce.includes(v)) return;
      debounce.push(v);
      // @ts-ignore
      v.onmousemove = (e) => {
        for (const card of document.getElementsByClassName('card')) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          const c = card as any;

          c.style.setProperty('--mouse-x', `${x}px`);
          c.style.setProperty('--mouse-y', `${y}px`);
        }
      };
    });
  }, 500);
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
      <a href={discord}><span class="cont">Discord</span></a>
    </nav>
  </div>
  <div class="page">
    <Route path="/"><Home /></Route>
    <Route path="/dl"><Download /></Route>
    <Route path="/android"><Android /></Route>
    <Route path="/android/install"><Android /></Route>
    <Route path="/android/install.html"><Android /></Route>
    <Route path="/android/legacy"><AndroidLegacy /></Route>
    <Route path="/android/roblox-mirrors"><AndroidMirrors /></Route>
    <Route path="/android/legacy.html"><AndroidLegacy /></Route>
    <Route path="/android/sign"><AndroidSign /></Route>
    <Route path="/as"><AndroidSign /></Route>
    <Route path="/acknowledgements"><Acknowledgements /></Route>
    <Route path="{baseUrl}/"><Home /></Route>
    <Route path="{baseUrl}/dl"><Download /></Route>
    <Route path="{baseUrl}/android"><Android /></Route>
    <Route path="{baseUrl}/android/install"><Android /></Route>
    <Route path="{baseUrl}/android/install.html"><Android /></Route>
    <Route path="{baseUrl}/android/legacy"><AndroidLegacy /></Route>
    <Route path="{baseUrl}/android/legacy.html"><AndroidLegacy /></Route>
    <Route path="{baseUrl}/android/roblox-mirrors"><AndroidMirrors /></Route>
    <Route path="{baseUrl}/android/sign"><AndroidSign /></Route>
    <Route path="{baseUrl}/as"><AndroidSign /></Route>
    <Route path="{baseUrl}/acknowledgements"><Acknowledgements /></Route>
  </div>
</Router>

<style>
  .navContainer {
    overflow-x: auto;
  }
</style>
