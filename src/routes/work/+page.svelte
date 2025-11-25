<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<main>
	<h1>Work</h1>

	{#if data.work.length > 0}
		<ul>
			{#each data.work as item}
				<li>
					<a href="/work/{item.slug}">
						<h2>{item.metadata.title}</h2>
						<p>{item.metadata.description}</p>
						{#if item.metadata.client}
							<span>Client: {item.metadata.client}</span>
						{/if}
						{#if item.metadata.year}
							<span>Year: {item.metadata.year}</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No work items yet.</p>
	{/if}
</main>
