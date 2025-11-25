import { getPage } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const page = await getPage('about');

	if (!page) {
		throw error(404, 'Page not found');
	}

	return {
		metadata: page.metadata,
		component: page.component
	};
};
