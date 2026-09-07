<script lang="ts">
  import { Volume2, VolumeX } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let isPlaying = false;
  let isMuted = false;
  let audio: HTMLAudioElement;

  function toggleAudio() {
    if (audio) {
      if (!isPlaying) {
        // Jika browser sebelumnya memblokir autoplay sepenuhnya, mainkan sekarang
        audio.muted = false;
        isMuted = false;
        audio.play().then(() => isPlaying = true).catch(e => console.error(e));
      } else {
        // Jika sedang berjalan, cukup toggle mute/unmute
        isMuted = !isMuted;
        audio.muted = isMuted;
      }
    }
  }

  onMount(() => {
    if (audio) {
      audio.volume = 0.35;
      
      // Coba putar otomatis dengan suara
      audio.play().then(() => {
        isPlaying = true;
        isMuted = false;
      }).catch((e) => {
        console.warn("Autoplay with sound blocked. Trying muted autoplay...", e);
        // Jika diblokir oleh browser (Autoplay Policy), coba jalankan dalam mode mute
        audio.muted = true;
        isMuted = true;
        audio.play().then(() => {
          isPlaying = true;
        }).catch(err => {
          console.error("Muted autoplay also blocked:", err);
          isPlaying = false;
        });
      });
    }
  });
</script>

<button 
  on:click={toggleAudio}
  class={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 group
    ${(!isMuted && isPlaying) ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-blue-600/40' : 'bg-white text-blue-600 border border-blue-100 hover:bg-blue-50 animate-[pulse_2s_ease-in-out_infinite]'}`}
  aria-label={(!isMuted && isPlaying) ? "Mute background music" : "Unmute background music"}
  title={(!isMuted && isPlaying) ? "Mute Music" : "Unmute Music"}
>
  {#if !isMuted && isPlaying}
    <div class="relative flex items-center justify-center">
      <Volume2 size={24} />
      <!-- Subtle ring animation when playing -->
      <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-20 animate-ping"></span>
    </div>
  {:else}
    <VolumeX size={24} class="group-hover:-rotate-12 transition-transform duration-300" />
  {/if}
</button>

<audio bind:this={audio} src="/bgm.mp3" loop preload="auto" class="hidden"></audio>
