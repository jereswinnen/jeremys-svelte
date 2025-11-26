import { getBlogPost } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await getBlogPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		metadata: post.metadata,
		component: post.component
	};
};
