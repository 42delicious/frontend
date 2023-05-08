<script lang="ts">
	import { locationStore, setLocation } from '$lib/stores/location';
	let locatoinFlag = '로딩중';
	$: locatoinFlag =
		$locationStore === 'seocho'
			? '서초 클러스터'
			: $locationStore === 'gaepo'
			? '개포 클러스터'
			: '로딩중';
</script>

<div class="navbar">
	<div class="flex-1">
		<img src="logo.png" class="h-12 pl-2" alt="42Delicious Logo" />
	</div>
	<div class="dropdown dropdown-end">
		<label tabindex="0" class="btn rounded-btn text-base">
			<svg
				class="fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
			>
			{locatoinFlag}
		</label>
		<ul
			tabindex="0"
			class="menu dropdown-content p-1 bg-base-100 z-50 border-2 border-base-300 rounded-box w-fit"
		>
			<li>
				<a class:active={$locationStore === 'gaepo'} on:click={() => setLocation('gaepo')}
					>개포 클러스터</a
				>
			</li>
			<li>
				<a class:active={$locationStore === 'seocho'} on:click={() => setLocation('seocho')}
					>서초 클러스터</a
				>
			</li>
		</ul>
	</div>
</div>
