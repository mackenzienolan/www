import { browser } from '$app/environment';
import posthog from 'posthog-js';

export const load = async () => {
	if (browser) {
		posthog.init('phc_XF6rT42USMoHVlpdBheeBO8YgIbVHF1ytAA7heVolx7', {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
		});
	}
	return;
};
