<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		load = true,
		bg = '#121212',
		text = '#e6e6e6',
		dark = true
	}: {
		load: boolean;
		bg?: string;
		text?: string;
		dark?: boolean;
	} = $props();

	let mailingLines: Array<string> = [
		'WASHINGTON UNIVERSITY',
		'MSC 111-107-115',
		'ONE BROOKINGS DRIVE',
		'ST.LOUIS, MO 63130-4899'
	];
</script>

{#if load}
	<div
		class={`
      w-full bg-[${bg}] text-[${text}] flex items-center justify-between md:justify-center 
      md:px-8 lg:px-24 h-full`}
	>
		<div class="font-jws text-xs lg:text-sm w-1/2 md:w-1/3 h-full flex items-center justify-center">
			<div class="flex flex-col items-start justify-center">
				<div
					class={`text-sm md:text-md lg:text-lg mb-4 text-left prose ${dark ? 'prose-dark' : 'prose-light'}`}
				>
					<TextSlideY text={'CONTACT INFO:'} stagger={true} letterDelay={10} />
				</div>
				<div>
					<a
						aria-label="Email"
						href="mailto:hhkang@wustl.edu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextSlideY text={'HHKANG@WUSTL.EDU'} stagger={true} letterDelay={10} delay={100} />
					</a>
				</div>
				<div>
					<TextSlideY text={'BUSCH HALL 220'} stagger={true} letterDelay={10} delay={150} />
				</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
			</div>
		</div>
		<div class="font-jws text-xs lg:text-sm w-1/2 md:w-1/3 h-full flex items-center justify-center">
			<div class="flex flex-col items-start justify-center">
				<div class="text-sm md:text-md lg:text-lg mb-4">
					<TextSlideY text={'MAILING ADDRESS:'} stagger={true} letterDelay={10} />
				</div>
				{#each mailingLines as l, i}
					<div>
						<TextSlideY text={l} stagger={true} letterDelay={10} delay={100 + 50 * i} />
					</div>
				{/each}
			</div>
		</div>

		<div
			class="font-jws text-xs lg:text-sm w-1/3 h-full items-center justify-center hidden sm:flex"
		>
			<div class="flex flex-col items-start justify-center">
				<div class="text-sm md:text-md lg:text-lg mb-4">
					<TextSlideY text={'LINKS:'} stagger={true} letterDelay={10} />
				</div>
				<a
					aria-label="WashU"
					href="https://ealc.wustl.edu/people/hyeok-hweon-kang"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'WASHU'} stagger={true} letterDelay={10} delay={100} />
				</a>
				<a
					aria-label="GOOGLE SCHOLAR"
					href="https://scholar.google.com/citations?user=pflXcdgAAAAJ&hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'GOOGLE SCHOLAR'} stagger={true} letterDelay={10} delay={150} />
				</a>
				<a
					aria-label="Email"
					href="mailto:hhkang@wustl.edu"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'EMAIL'} stagger={true} letterDelay={10} delay={200} />
				</a>
				<div>&nbsp;</div>
			</div>
		</div>
	</div>
{/if}
