<script lang="ts">
  import baseUrl from '../base';
</script>

<main>
  <div class="p1">
    <div>
      <h1>Fluxus Android Download Issue</h1>
      <p>You CANNOT use Roblox from the PlayStore. Uninstall ALL Roblox apps before trying to install Fluxus.</p>
      <p>Watch the video for help!</p>
      <p>
          Install <a
            href="/android/roblox-mirrors/"
            class="normal"
            target="_blank"
            rel="noopener noreferrer">Roblox APK</a
          >
      </p>
        
      <!-- svelte-ignore a11y-media-has-caption -->

      <iframe
        width="1024"
        height="576"
        style="max-height: 75vh; max-width: 75vw"
        src="https://www.youtube.com/embed/VMhVz4QRBs8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

    </div>
  </div>
</main>

<style lang="scss">
  .p1 {
    min-height: calc(100vh - 54px);
    max-width: 100vw;
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
    ol {
      color: #a5adcb;
      font-size: 1.2em;
      text-align: left;
      width: max-content;
      display: inline-block;
    }
    a:not(.normal) {
      color: rgb(202, 211, 245);
      text-decoration: none;
      padding: 8px 8px;
      background: rgb(141, 115, 176);
      /*border-radius: 16px;*/
    }
  }
</style>
