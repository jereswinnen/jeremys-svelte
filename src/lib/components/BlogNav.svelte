<script lang="ts">
	import type { BlogPostType } from '$lib/types/content';

	interface Props {
		current?: BlogPostType | 'all';
	}

	let { current = 'all' }: Props = $props();
</script>

<nav>
	<a href="/blog" aria-current={current === 'all' ? 'page' : undefined}>All</a>
	<a href="/blog/articles" aria-current={current === 'article' ? 'page' : undefined}>Articles</a>
	<a href="/blog/notes" aria-current={current === 'note' ? 'page' : undefined}>Notes</a>
</nav>
