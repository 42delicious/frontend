<script lang="ts">
	import Price from './Price.svelte';
	import RestaurantDetail from './RestaurantDetail.svelte';

	export let id: string;
	export let name: string;
	export let category: string;
	export let summary: string;
	export let price: string;
	let isOpen: boolean = false;
</script>

<label for={id} class="card w-96 bg-base-100 shadow m-5" style="cursor: pointer;">
	<div class="card-body">
		<h1 class="card-title prose">{name}</h1>
		<p>{summary}</p>
		<br />
		<div class="card-actions justify-end">
			<button class="btn btn-outline">{category}</button>
			<Price {price} />
		</div>
	</div>
</label>

<input type="checkbox" {id} bind:checked={isOpen} class="modal-toggle" />
{#if isOpen}
	<RestaurantDetail {id} />
{/if}
