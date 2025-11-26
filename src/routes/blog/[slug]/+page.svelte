<script lang="ts">
	import type { PageData } from './$types';
	import type { NoteMetadata } from '$lib/types/content';
	import type { Component } from 'svelte';
	import { ContentRenderer } from '$lib/components';

	let { data }: { data: PageData } = $props();

	const isNote = data.metadata.type === 'note';
</script>

<svelte:head>
	<title>{data.metadata.title || 'Note'}</title>
	{#if data.metadata.type === 'article' && data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>

<main>
	<ContentRenderer component={data.component as Component}>
		{#snippet header()}
			{#if data.metadata.title}
				<h1>{data.metadata.title}</h1>
			{/if}
			<div>
				<span>{data.metadata.type}</span>
				<time datetime={data.metadata.date}>{data.metadata.date}</time>
			</div>
			{#if isNote && (data.metadata as NoteMetadata).link}
				<a href={(data.metadata as NoteMetadata).link} target="_blank" rel="noopener noreferrer">
					View linked resource
				</a>
			{/if}
		{/snippet}
		{#snippet footer()}
			{#if data.metadata.tags && data.metadata.tags.length > 0}
				<ul>
					{#each data.metadata.tags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			{/if}
		{/snippet}
	</ContentRenderer>
</main>
