<script lang="ts">
	import type { PageData } from './$types';
	import type { NoteMetadata } from '$lib/types/content';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<main>
	<h1>Notes</h1>

	<nav>
		<a href="/blog">All</a>
		<a href="/blog/articles">Articles</a>
		<a href="/blog/notes" aria-current="page">Notes</a>
	</nav>

	{#if data.posts.length > 0}
		<ul>
			{#each data.posts as post}
				{@const metadata = post.metadata as NoteMetadata}
				<li>
					<a href="/blog/{post.slug}">
						{#if metadata.title}
							<h2>{metadata.title}</h2>
						{/if}
						<time datetime={metadata.date}>{metadata.date}</time>
						{#if metadata.link}
							<span>Link</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No notes yet.</p>
	{/if}
</main>
