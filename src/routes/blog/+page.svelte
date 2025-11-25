<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main>
	<h1>Blog</h1>

	<nav>
		<a href="/blog">All</a>
		<a href="/blog/articles">Articles</a>
		<a href="/blog/notes">Notes</a>
	</nav>

	{#if data.posts.length > 0}
		<ul>
			{#each data.posts as post}
				<li>
					<a href="/blog/{post.slug}">
						{#if post.metadata.title}
							<h2>{post.metadata.title}</h2>
						{/if}
						{#if post.metadata.type === 'article' && post.metadata.description}
							<p>{post.metadata.description}</p>
						{/if}
						<div>
							<span>{post.metadata.type}</span>
							<time datetime={post.metadata.date}>{post.metadata.date}</time>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts yet.</p>
	{/if}
</main>
