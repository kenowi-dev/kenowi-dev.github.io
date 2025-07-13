<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { InViewObserver } from '$lib/inViewObserver.svelte.js';

	let titleObserver = new InViewObserver();

</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 flex justify-center items-center flex-col w-screen font-bold text-5xl text-amber-100">

	<section {@attach el => titleObserver.observe(el)}
					 class={[titleObserver.classes(), "mb-1 h-screen flex justify-center items-center flex-col"]}>
		<h1>Kenowi</h1>
		<h3 class="text-red-400 text-sm">!!! This site is under construction !!!</h3>
		<h3 class="text-sm">Information on this site may not be up to date.</h3>
	</section>

	<section class="mb-1 h-[70vh] w-1/2">
		<Card
			class="h-1/2"
			title="Dotfile"
			description="
				This is were I manage my dotfiles.
				It went through multiple iterations from `ansible` to `bash scripts` to `chezmoi`."
			link="https://github.com/kenowi-dev/dotfiles"
			linkText="Github"
		/>
	</section>

	<section class="mb-1 h-[70vh] w-1/2">
		<Card
			class="h-1/2"
			title="Exportify"
			description="Learing-By-Doing project to export and manage a spotify library."
			link="https://github.com/kenowi-dev/exportify"
			linkText="Github"
		/>
	</section>

	<section class="mb-1 h-[70vh] w-1/2">
		<Card
			class="h-1/2"
			title="LilyPond Guitar Bends"
			description="Extension for the Lilypond language. Adds special notation for guitar bends."
			link="https://github.com/kenowi-dev/lilypond-guitar-bends"
			linkText="Github"
		/>
	</section>

	<section class="mb-1 h-[70vh] w-1/2">
		<Card
			class="h-1/2"
			title="REST in peace"
			description="
				New and unfinished golang project.
				REST in peace aims to be a REST api validator that can take a single endpoint or an openAPI specification.
				The Validation checks if the REST best practices and http specifications are followed correctly."
			link="https://github.com/kenowi-dev/rest-in-peace"
			linkText="Github"
		/>
	</section>

</div>