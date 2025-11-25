<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<h1>Welcome</h1>

	{#if data.featuredWork.length > 0}
		<section>
			<h2>Featured Work</h2>
			<ul>
				{#each data.featuredWork as work}
					<li>
						<a href="/work/{work.slug}">{work.metadata.title}</a>
						<p>{work.metadata.description}</p>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if data.recentPosts.length > 0}
		<section>
			<h2>Recent Posts</h2>
			<ul>
				{#each data.recentPosts as post}
					<li>
						<a href="/blog/{post.slug}">{post.metadata.title}</a>
						<span>{post.metadata.type}</span>
						<time datetime={post.metadata.date}>{post.metadata.date}</time>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</main>
