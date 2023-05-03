<script lang="ts">
	import api from '$lib/axiosInstance';
	import { onMount } from 'svelte';
	import type { RestaurantInterface } from '../../../model/restaurant';

	export let id: string;
	let restaurant: RestaurantInterface;

	const fetchRestaurant = async () => {
		const { data } = await api.get(`/restaurants/${id}`);
		restaurant = data;
	};

	onMount(() => fetchRestaurant());
</script>

{#if restaurant}
	<label for={restaurant.id} class="modal modal-bottom sm:modal-middle">
		<div class="modal-box">
			<h1 class="font-bold text-2xl p-2 m-1">{restaurant.name}</h1>
			<flex class="p-2">
				<div class="badge badge-primary">{restaurant.category}</div>
				<div class="badge badge-primary">{restaurant.price}</div>
			</flex>
			<p class="p-2 pt-4">{@html restaurant.detail}</p>
			<div class="modal-action">
				<label for={restaurant.id} class="btn">닫기</label>
			</div>
		</div>
	</label>
{/if}
