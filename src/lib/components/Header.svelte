<script lang="ts">
	import { setLocation } from '$lib/stores/location';
	let locatoinFlag = '';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<img src="logo.png" class="h-12 pl-2" alt="42Delicious Logo" />
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li tabindex="0">
				<p>
					{locatoinFlag}
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</p>
				<ul class="p-2 bg-base-100 z-50 border-2 border-base-300">
					<li><p on:click={() => setLocation('gaepo')}>개포 클러스터</p></li>
					<li><p on:click={() => setLocation('seocho')}>서초 클러스터</p></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
