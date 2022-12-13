<script lang="ts">
  import baseUrl from '../base';
  import translate from '../i18n';

  if (navigator.userAgent.includes('Android'))
    window.location.replace(baseUrl + '/android');
</script>

<main>
  <div class="p1">
    <div>
      <h1>{translate('Download Fluxus Windows/Linux')}</h1>
      <a
        href="https://linkvertise.com/152666/FluxusV7Installer/1"
        target="_blank"
        rel="noreferrer">LV Installer</a
      >
      <a
        href="https://linkvertise.com/152666/FluxusD/1"
        target="_blank"
        rel="noreferrer">LV</a
      >
      <p>
        {translate(
          'Note: The above contain advertisements. Please be aware of these before you continue.'
        )}
      </p>
      <hr />
      <h2>{translate('Need Help?')}</h2>
      <iframe
        width="1024"
        height="576"
        style="max-height: 75vh; max-width: 75vw"
        src={translate('https://www.youtube.com/embed/MqBjGEo289Q')}
        title="[UPDATED] How to Install FLUXUS Executor Free | Download Tutorial | Level 8 Exploit | 2022"
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
    display: flex;
    justify-content: center;
    align-items: center;

    background: #191a27;

    h1,
    h2 {
      color: rgb(141, 115, 176);
    }

    p {
      font-weight: 400;
      color: #a5adcb;
      font-size: 1.2em;
    }
    a {
      color: rgb(202, 211, 245);
      text-decoration: none;
      padding: 8px 8px;
      background: rgb(141, 115, 176);
      /*border-radius: 16px;*/
    }
  }
</style>
