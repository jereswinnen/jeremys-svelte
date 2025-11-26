<script lang="ts">
	import type { PageData } from './$types';
	import { BlogNav, PostList } from '$lib/components';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<main>
	<h1>Notes</h1>
	<BlogNav current="note" />
	<PostList posts={data.posts} emptyMessage="No notes yet." />
</main>
