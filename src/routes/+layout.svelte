<script>
	import '../app.postcss';
	import { dev, browser } from '$app/environment';
	import { PUBLIC_MSW_ENABLED } from '$env/static/public';
	import Header from '$lib/components/Header.svelte';
	import { initLocation } from '$lib/stores/location';
	import { onMount } from 'svelte';

	const isMswEnabled = dev && browser && PUBLIC_MSW_ENABLED;
	let isReady = !isMswEnabled;

	if (isMswEnabled) {
		import('../mocks/browser').then(({ worker }) => {
			worker.start().then(() => {
				isReady = true;
			});
		});
	}

	onMount(() => {
		initLocation();
	});
</script>

<div class="bg-base-300">
  {#if isReady}
    <Header />
    <div class="grid h-screen" style="place-items: start center;">
      <slot />
    </div>
  {/if}
</div>
