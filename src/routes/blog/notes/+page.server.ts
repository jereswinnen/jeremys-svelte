import { getBlogPosts } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getBlogPosts('note');

	return {
		posts
	};
};
