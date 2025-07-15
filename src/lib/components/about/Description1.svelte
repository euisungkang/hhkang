<script lang="ts">
	import saltpeter from '$lib/media/saltpeter.webp';
	import TextSlideX from '../effects/TextSlideX.svelte';

	let {
		overlayColor
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="w-full h-full transition-colors duration-1000 ease-out flex items-center justify-center"
	style:color={overlayColor}
>
	<div class="w-[70vw] h-[80vh] overflow-hidden">
		<div
			class="w-full h-2/12 text-2xl 2xl:text-4xl font-crimson text-justify flex items-center pb-8"
		>
			Professor Kang is a historian of early modern Korea, with research and teaching interests in
			the history of science, the history of technology, and global material culture.
		</div>
		<div class="w-full h-10/12 flex">
			<div class="w-[60%] h-full text-base 2xl:text-[1.3rem] flex items-start font-crimson pr-8">
				Kang’s research focuses on the history of East Asian science and technology in a global
				context, especially on the knowledge of Chosŏn Korean (1392–1910) artisans and military
				practitioners in the early modern world. His first book project emphasizes the rise of
				“engineers” amongst these artisans and practitioners and their system of material design and
				production. He argues that the Korean experts developed a technological literacy that proved
				innovative across various fields, that they won recognition for doing so, and that they
				creatively remade global material culture, from guns and water pumps to steam engines.
				Portions of this work have received the Turriano ICOHTEC Prize from the International
				Committee for the History of Technology, the Joan Cahalin Robinson Prize from the Society
				for the History of Technology, and the ICAS Book Prize (English—Best Dissertation in the
				Humanities) from the International Convention of Asia Scholars. The project has been
				supported by the American Council of Learned Societies, the Andrew F. Mellon Foundation,
				Korea Foundation, and the American Historical Association.
				<br /><br />
				Kang’s research in the history of science has been published in Isis: A Journal of the History
				of Science Society, where his article emphasized the immobility of certain natural and technological
				knowledge. His future book project will further intervene in the global history of science by
				investigating “practical scholarship” in nineteenth-century Korea, namely, how a group of unemployed
				scholars, physicians, and noblewomen vetted “useful knowledge” from the ever-expanding global
				knowledge circuit.
				<!-- <div class="h-1/3 w-full flex items-end"> -->
				<!-- 	Kang’s research in the history of science has been published in Isis: A Journal of the -->
				<!-- 	History of Science Society, where his article emphasized the immobility of certain natural -->
				<!-- 	and technological knowledge. His future book project will further intervene in the global -->
				<!-- 	history of science by investigating “practical scholarship” in nineteenth-century Korea, -->
				<!-- 	namely, how a group of unemployed scholars, physicians, and noblewomen vetted “useful -->
				<!-- 	knowledge” from the ever-expanding global knowledge circuit. -->
				<!-- </div> -->
			</div>

			<figure class="w-[40%] h-full pr-12">
				<img src={saltpeter} alt="Saltpeter" class="object-cover h-full float-right" />
			</figure>
		</div>
	</div>
</div>
