<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		load = true
	}: {
		load: boolean;
	} = $props();
</script>

{#if load}
	<div class="w-full bg-[#121212] text-[#e6e6e6] flex items-center justify-center px-24 h-full">
		<div class="font-jws text-sm w-1/3 h-full flex items-center justify-center">
			<div class="flex flex-col items-start justify-center">
				<div class="text-lg mb-4 text-left">CONTACT INFO:</div>
				<div>EMAIL: HHKANG@WUSTL.EDU</div>
				<div>OFFICE: BUSCH HALL 220</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
			</div>
		</div>
		<div class="font-jws text-sm w-1/3 h-full flex items-center justify-center">
			<div class="flex flex-col items-start justify-center">
				<div class="text-lg mb-4">MAILING ADDRESS:</div>
				<div>WASHINGTON UNIVERSITY</div>
				<div>MSC 111-107-115</div>
				<div>ONE BROOKINGS DRIVE</div>
				<div>ST.LOUIS, MO 63130-4899</div>
			</div>
		</div>
		<div class="font-jws text-sm w-1/3 h-full flex items-center justify-center">
			<div class="flex flex-col items-start justify-center">
				<div class="text-lg mb-4">LINKS:</div>
				<a
					aria-label="Github"
					href="https://github.com/euisungkang"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'GITHUB'} />
				</a>
				<a
					aria-label="LinkedIn"
					href="https://www.linkedin.com/in/easton/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'LINKEDIN'} />
				</a>
				<a
					aria-label="LinkedIn"
					href="https://www.linkedin.com/in/easton/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'LINKEDIN'} />
				</a>
				<a
					aria-label="Email"
					href="mailto:easton@lamina.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TextSlideY text={'EMAIL'} />
				</a>
			</div>
		</div>
	</div>
{/if}
