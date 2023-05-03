<script lang="ts">
	import type { RestaurantInterface } from '../../model/restaurant';
	import RestaurantSummary from './RestaurantSummary.svelte';
	import Loading from '../Loading.svelte';
	import { locationStore } from '../../stores/location';
	import api from '$lib/axiosInstance';

	let isLoading = true;
	let restaurants: RestaurantInterface[];

	const fetchRestaurants = async () => {
		isLoading = true;
		const { data } = await api.get(`/restaurants?cluster=${$locationStore}`);
		restaurants = data;
		isLoading = false;
	};

	$: fetchRestaurants();
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
		{#if !isLoading}
			{#each restaurants as restaurant}
				<RestaurantSummary
					id={restaurant.id}
					name={restaurant.name}
					category={restaurant.category}
					summary={restaurant.summary}
					price={restaurant.price}
				/>
			{/each}
		{:else}
			<Loading />
		{/if}
	</div>
</div>
