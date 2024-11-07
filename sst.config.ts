/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			providers: {
				aws: {
					profile: input.stage === 'main' ? 'macknolan-prod' : 'macknolan-dev'
				}
			},
			name: 'www',
			removal: input?.stage === 'main' ? 'retain' : 'remove',
			home: 'aws'
		};
	},
	async run() {
		new sst.aws.SvelteKit('www', {
			domain:
				$app.stage === 'main'
					? {
							name: 'macknolan.dev',
							dns: sst.aws.dns({
								zone: 'Z0553077S22QHCTX5Y0U'
							}),
							redirects: [`www.macknolan.dev`]
						}
					: undefined
		});
	}
});
