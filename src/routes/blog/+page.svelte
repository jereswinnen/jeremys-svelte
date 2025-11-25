<script lang="ts">
	import type { PageData } from './$types';
	import { BlogNav, PostList } from '$lib/components';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main>
	<h1>Blog</h1>
	<BlogNav current="all" />
	<PostList posts={data.posts} />
</main>
