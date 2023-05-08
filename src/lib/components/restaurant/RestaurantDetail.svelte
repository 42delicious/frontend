<script lang="ts">
	import api from '$lib/axiosInstance';
	import { isMobile } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { RestaurantInterface } from '../../../model/restaurant';

	export let id: string;
	let restaurant: RestaurantInterface;

	const fetchRestaurant = async () => {
		const { data } = await api.get(`/restaurants/${id}`);
		restaurant = data;
	};

	type MapProvider = 'naver' | 'kakao';

	const openMap = (provider: MapProvider) => {
		const { latitude, longitude, name } = restaurant;
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude: currentLat, longitude: currentLng } = position.coords;
			let url;
			if (isMobile())
				url =
					provider === 'naver'
						? `nmap://route/walk?slat=${currentLat}&slng=${currentLng}&dlat=${latitude}&dlng=${longitude}&dname=${name}`
						: `kakaomap://route?sp=${currentLat},${currentLng}&ep=${currentLat},${currentLng}&by=FOOT`;
			else
				url =
					provider === 'naver'
						? `https://map.naver.com/v5/directions/${currentLat},${currentLng},내위치,,PLACE_POI/${longitude},${latitude},${name},,PLACE_POI/-/walk`
						: `https://map.kakao.com/link/to/${name},${latitude},${longitude}`;
			window.open(url);
		});
	};

	onMount(() => fetchRestaurant());
</script>

{#if restaurant}
	{@const { id, name, category, price, latitude, longitude, detail } = restaurant}
	<label for={id} class="modal modal-bottom sm:modal-middle">
		<div class="modal-box">
			<h1 class="font-bold text-2xl p-2 m-1">{name}</h1>
			<flex class="p-2">
				<div class="badge badge-primary">{category}</div>
				<div class="badge badge-primary">{price}</div>
			</flex>
			<p class="p-2 pt-4">{@html detail}</p>
			<div class="modal-action">
				{#if longitude && latitude}
					<button
						class="btn"
						on:click={() => {
							openMap('naver');
						}}>네이버맵 길찾기</button
					>
					<button
						class="btn"
						on:click={() => {
							openMap('kakao');
						}}>카카오맵 길찾기</button
					>
				{/if}
				<label for={restaurant.id} class="btn">닫기</label>
			</div>
		</div>
	</label>
{/if}
