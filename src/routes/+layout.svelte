<script>
	import '../app.postcss';
	import { dev, browser } from '$app/environment';
	import { PUBLIC_MSW_ENABLED } from '$env/static/public';

	const isMswEnabled = dev && browser && PUBLIC_MSW_ENABLED;
	let isReady = !isMswEnabled;

	if (isMswEnabled) {
		import('../mocks/browser').then(({ worker }) => {
			worker.start().then(() => {
				isReady = true;
			});
		});
	}
</script>

{#if isReady}
	<slot />
{/if}
