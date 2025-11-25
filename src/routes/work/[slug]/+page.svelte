<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();

	const Content = data.component as Component;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<main>
	<article>
		<header>
			<h1>{data.metadata.title}</h1>
			{#if data.metadata.client}
				<p>Client: {data.metadata.client}</p>
			{/if}
			{#if data.metadata.role}
				<p>Role: {data.metadata.role}</p>
			{/if}
			{#if data.metadata.year}
				<p>Year: {data.metadata.year}</p>
			{/if}
		</header>
		<Content />
	</article>
</main>
