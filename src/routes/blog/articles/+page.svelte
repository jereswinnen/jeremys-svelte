<script lang="ts">
	import type { PageData } from './$types';
	import { BlogNav, PostList } from '$lib/components';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<main>
	<h1>Articles</h1>
	<BlogNav current="article" />
	<PostList posts={data.posts} emptyMessage="No articles yet." />
</main>
