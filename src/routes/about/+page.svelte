<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();

	const Content = data.component as Component;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>

<main>
	<article>
		<Content />
	</article>
</main>
