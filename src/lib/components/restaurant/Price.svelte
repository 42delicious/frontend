<script lang="ts">
	export let price: string;
</script>

{#if price == '가격 높음'}
	<button class="btn btn-error btn-outline">{price}</button>
{:else if price == '가격 보통'}
	<button class="btn btn-warning btn-outline">{price}</button>
{:else if price == '가격 낮음'}
	<button class="btn btn-success btn-outline">{price}</button>
{:else}
	<button class="btn btn-outline">가격 정보 없음</button>
{/if}
