<script lang="ts">
	import clsx, { type ClassValue } from 'clsx';
	import { InViewObserver } from '$lib/inViewObserver.svelte.js';



	interface Props {
		title: string,
		description: string,
		link: string,
		linkText: string,
		class?: ClassValue | undefined | null
	}

	let {
		title,
		description,
		link,
		linkText,
		class: className = '',
	}: Props = $props();

	const observer = new InViewObserver({
		inViewClasses: clsx("opacity-100 blur-none translate-0"),
		outOfViewClasses: clsx("-translate-x-full opacity-0, blur-[5px]"),
	})

</script>

<div {@attach el => observer.observe(el)}
		 class={[observer.classes(), className]}>

	<div class="h-full w-full p-0.5 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20">

		<div class="h-full p-6 rounded-[15px] bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-blue-500/20 flex flex-col">
			<h3
				class="mb-3 text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
				{title}
			</h3>
			<p class="mb-5 text-lg leading-relaxed text-slate-300 opacity-90">
				{description}
			</p>
			<a
				href={link}
				class="group mt-auto flex items-center w-fit gap-1.5 px-4 py-2 text-sm font-medium text-blue-400 bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-lg transition-all duration-300 hover:text-blue-300 hover:from-blue-500/20 hover:to-blue-600/10 hover:border-blue-500/50 hover:translate-x-0.5 hover:shadow-lg hover:shadow-blue-500/15">
				{linkText}

				<svg
					class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-1px]"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M7 17L17 7M17 7H7M17 7V17" />
				</svg>
			</a>
		</div>
	</div>
</div>