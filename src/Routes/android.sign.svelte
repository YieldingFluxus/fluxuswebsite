<script lang="ts">
  import baseUrl from '../base';
</script>

<main>
  <div class="p1">
    <div>
      <h1>Fluxus Android Sign Issue</h1>
      <p>Simply follow these steps:</p>
      <ol>
        <li>Run the Fluxus Installer, wait for it to show an error.</li>
        <li>
          Install <a
            href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk"
            class="normal"
            target="_blank"
            rel="noopener noreferrer">MT Manager</a
          >
        </li>
        <li>Follow the instructions in the video below.</li>
      </ol>
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        src="{baseUrl}/parse.mp4"
        controls
        style="max-height:75vh; max-width: 95vw;display:block;margin-bottom:8px"
      />
    </div>
  </div>
</main>

<style lang="scss">
  .p1 {
    min-height: calc(100vh - 54px);
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
