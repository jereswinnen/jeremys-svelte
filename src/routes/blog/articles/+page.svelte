<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<main>
	<h1>Articles</h1>

	<nav>
		<a href="/blog">All</a>
		<a href="/blog/articles" aria-current="page">Articles</a>
		<a href="/blog/notes">Notes</a>
	</nav>

	{#if data.posts.length > 0}
		<ul>
			{#each data.posts as post}
				<li>
					<a href="/blog/{post.slug}">
						<h2>{post.metadata.title}</h2>
						{#if post.metadata.description}
							<p>{post.metadata.description}</p>
						{/if}
						<time datetime={post.metadata.date}>{post.metadata.date}</time>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No articles yet.</p>
	{/if}
</main>
