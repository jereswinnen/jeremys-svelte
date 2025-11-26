import { getBlogPosts, getWorkItems } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [allWork, allPosts] = await Promise.all([getWorkItems(), getBlogPosts()]);

	return {
		featuredWork: allWork.filter((w) => w.metadata.featured).slice(0, 3),
		recentPosts: allPosts.slice(0, 5)
	};
};
