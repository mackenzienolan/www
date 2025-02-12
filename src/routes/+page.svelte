<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { routes } from '$lib/routes';
	import { Github, Linkedin, Mail, MapPin } from 'lucide-svelte';

	const skills = [
		'JavaScript',
		'TypeScript',
		'React',
		'Node.js',
		'Next.js',
		'Svelte',
		'Python',
		'AWS',
		'Docker',
		'GraphQL',
		'REST APIs',
		'Distributed Systems',
		'Microservices',
		'PostgreSQL',
		'MySQL',
		'NoSQL',
		'Agile Methodologies',
		'Team Leadership',
		'CI/CD'
	];

	const projects = [
		{
			title: 'Studio Genius',
			url: 'https://studiogenius.co',
			description: 'Advanced analytics platform for fitness studios',
			features: [
				'Customer Feedback Analysis. Gather and analyze customer feedback to continuously improve your services.',
				'Member Management. Track memberships, attendance, and engagement with ease.',
				`Performance Insights. Gain valuable insights to optimize your studio's performance.`
			]
		},
		{
			title: 'Quantum Sciences',
			description: `Developed a platform for a private healthcare study on Solace Lifescience's NuCalm product`,
			features: [
				'Survey Participation. Collect and manage survey responses from participants.',
				'Data Analysis. Analyze and visualize data to identify trends and insights.',
				'Audio Player. Participants can listen to NuCalm audio tracks directly on the platform.'
			]
		}
	];

	const workExperience = [
		{
			title: 'Locorum',
			url: 'https://locorum.io',
			description: 'CTO',
			features: [
				`Led the comprehensive re-development of the Locorum platform, transforming it from a single-user web app to a scalable solution designed for large teams.`,
				`Championed Locorum's new growth strategy by collaborating closely with leadership, sales, and marketing teams to transition from a costly outbound sales approach to a product-led growth model.`,
				`Designed and developed AI-powered content generation tools to help customers craft captivating email subject lines, email copy, and engaging SMS messages.`
			]
		},
		{
			title: 'Locorum',
			url: 'https://locorum.io',
			description: 'Senior Engineering Lead',
			features: [
				`Spearheaded a ground-up redevelopment and modernization of the platform, including the transition to distributed systems, migration from JavaScript to TypeScript, and adoption of Next.js.`,
				`Collaborated with sales and marketing to develop an integration between Locorum and HubSpot CRM, enabling the synchronization of customer data and analysis of customer journeys based on events and activity within the Locorum platform.`,
				`Identified key risks in Locorum&apos;s platform and collaborated with the team to implement end-to-end testing using Cypress, ensuring that new feature development did not compromise the core product.`
			]
		}
	];

	// SEO data
	const seoData = {
		title: 'Mackenzie Nolan - Engineering Manager & Full Stack Developer',
		description:
			'Experienced Engineering Manager and Full Stack Developer based in Toronto, ON. Specializing in scalable applications and team leadership.',
		keywords:
			'Mackenzie Nolan, Engineering Manager, Full Stack Developer, JavaScript, TypeScript, React, Node.js, Python, AWS',
		author: 'Mackenzie Nolan',
		image: 'https://macknolan.dev/image.png', // Replace with your actual profile image URL
		url: 'https://macknolan.dev' // Replace with your actual website URL
	};
</script>

<svelte:head>
	<title>{seoData.title}</title>
	<meta name="description" content={seoData.description} />
	<meta name="keywords" content={seoData.keywords} />
	<meta name="author" content={seoData.author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={seoData.url} />
	<meta property="og:title" content={seoData.title} />
	<meta property="og:description" content={seoData.description} />
	<meta property="og:image" content={seoData.image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={seoData.url} />
	<meta property="twitter:title" content={seoData.title} />
	<meta property="twitter:description" content={seoData.description} />
	<meta property="twitter:image" content={seoData.image} />
</svelte:head>

<div
	class="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
>
	<main class="container mx-auto px-4 py-16">
		<header class="mx-auto mb-12 flex flex-col justify-center text-center">
			<div class="mx-auto my-auto flex flex-row gap-x-3 pb-3">
				<img
					src="/mackenzienolan.jpeg"
					alt="Mackenzie Nolan"
					width="50"
					height="50"
					class="h-14 w-14 rounded-full border-2 border-black"
				/>
				<h1 class="my-auto mb-4 text-4xl font-bold">Mackenzie Nolan</h1>
			</div>

			<p class="mb-2 text-xl">Entrepreneur, Leader & Experienced Full-Stack Developer</p>
			<div class="flex items-center justify-center text-sm text-muted-foreground">
				<MapPin class="mr-1 h-4 w-4" />
				Toronto, ON, Canada
			</div>
		</header>

		<section class="mb-12" id="about">
			<h2 class="mb-4 text-2xl font-semibold">About Me</h2>
			<p class="pb-2 text-lg">
				With over nine years of experience in app development and management, I am a results-driven
				entrepreneur dedicated to building innovative, high-performing applications that drive
				business growth. I have led development teams, spearheaded technical strategies, and
				consistently delivered impactful, user-centered products that optimize user experiences and
				support scalable growth. My expertise spans a range of technologies, including React,
				TypeScript, Next.js, and more, and I am passionate about driving collaboration, mentoring
				teams, and setting clear technical directions.
			</p>
			<p class="text-lg">
				Outside of work, I&apos;m a sports enthusiast, cheering on the Montreal Canadiens, the
				Minnesota Vikings, and watching Tiger Woods whenever he&apos;s competing. I enjoy staying
				active with my husky-shepherd, who keeps me on my toes, and you&apos;ll often find me at
				fitness classes, whether it&apos;s spin, HIIT, or Pilates. Live music is another passion of
				mine—I love the energy and connection of seeing artists perform in person.
			</p>
		</section>

		<section class="mb-12" id="skills">
			<h2 class="mb-4 text-2xl font-semibold">Skills</h2>
			<div class="flex flex-row flex-wrap gap-2">
				{#each skills as skill}
					<div
						class="rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
					>
						{skill}
					</div>
				{/each}
			</div>
		</section>

		<section class="mb-12" id="projects">
			<h2 class="mb-4 text-2xl font-semibold">Current Projects</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
				{#each projects as project}
					<Card>
						<CardHeader>
							{#if project.url}
								<a href={project.url} class="underline" target="_blank">
									<CardTitle>{project.title}</CardTitle>
								</a>
							{:else}
								<CardTitle>{project.title}</CardTitle>
							{/if}
							<!-- <CardTitle>{project.title}</CardTitle> -->
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent>
							{#if project.features}
								<ul class="list-inside list-disc">
									{#each project.features as feature}
										<li>{feature}</li>
									{/each}
								</ul>
							{/if}
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<section class="mb-12" id="experience">
			<h2 class="mb-4 text-2xl font-semibold">Work Experience</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
				{#each workExperience as work}
					<Card>
						<CardHeader>
							{#if work.url}
								<a href={work.url} class="underline" target="_blank">
									<CardTitle>{work.title}</CardTitle>
								</a>
							{:else}
								<CardTitle>{work.title}</CardTitle>
							{/if}
							<!-- <CardTitle>{work.title}</CardTitle> -->
							<CardDescription>{work.description}</CardDescription>
						</CardHeader>
						<CardContent>
							{#if work.features}
								<ul class="list-inside list-disc">
									{#each work.features as feature}
										<li>{feature}</li>
									{/each}
								</ul>
							{/if}
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<section id="contact">
			<h2 class="mb-4 text-2xl font-semibold">Get in Touch</h2>
			<div class="flex flex-wrap gap-4">
				<a href={routes.links.linkedin} target="_blank">
					<Button class="gap-2">
						<Mail class="h-4 w-4" />
						Email Me
					</Button>
				</a>
				<a href={routes.links.linkedin} target="_blank">
					<Button variant="outline" class="gap-2">
						<Linkedin class="h-4 w-4" />
						LinkedIn
					</Button>
				</a>
				<a href={routes.links.github}>
					<Button variant="outline" class="gap-2">
						<Github class="h-4 w-4" />
						GitHub
					</Button>
				</a>
			</div>
		</section>
	</main>
	<footer class="mt-16 bg-gray-800 py-8 text-white">
		<div class="container mx-auto px-4 text-center">
			<p class="mb-2">© {new Date().getFullYear()} Mackenzie Nolan. All rights reserved.</p>
			<p class="text-sm text-gray-400">
				Built with <a href={routes.links.svelte} class="underline hover:text-white">Svelte</a> and
				<a href={routes.links.sst} class="underline hover:text-white">SST</a>
			</p>
		</div>
	</footer>
</div>
