<script lang="ts">
	import profile from '$lib/media/p.webp';
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
		<!-- <div -->
		<!-- 	class="w-full h-2/12 text-2xl 2xl:text-4xl font-crimson text-justify flex items-center pb-8" -->
		<!-- > -->
		<!-- 	Professor Kang is a historian of early modern Korea, with research and teaching interests in -->
		<!-- 	the history of science, the history of technology, and global material culture. -->
		<!-- </div> -->
		<div class="w-full h-12/12 flex">
			<div class="w-[50%] h-full text-base 2xl:text-[1.3rem] flex items-start font-crimson pr-2">
				Professor Hyeok Hweon “H. H.” Kang grew up in Guatemala City, Guatemala. After studying at
				Harvard University, where he received his Ph.D. in History and East Asian Languages, he
				joined the WashU faculty in 2021 as Assistant Professor of East Asian Languages and
				Cultures. In 2023–24, he received an American Council of Learned Societies Fellowship. In
				2020–21, he was a D. Kim Foundation Postdoctoral Fellow at the Department of the History of
				Science and Technology, Johns Hopkins University. He co-chairs the Forum for the History of
				Science in Asia at the History of Science Society.
				<br /><br />
				Kang is currently completing his first book, Artisanal Heart: Korea, Confucian Statecraft, and
				the Sciences of Making (under contract with The University of Chicago Press), which examines
				how the Korean state supported its artisans and “ingeniators,” producing a vibrant intellectual
				culture of mechanics and material production. His previous work on this subject has been awarded
				the 2021 Turriano Prize by the Juanelo Turriano Foundation and the International Committee for
				the History of Technology; and the 2021 International Convention of Asia Scholars Book Prize
				(English—Best Dissertation in the Humanities).
				<br /><br />
				Kang’s research focuses on the intellectual and cultural history of Korea in the Chosŏn (1391–1910)
				period. He is particularly interested in how socially marginalized people, like artisans and
				practitioners, investigated the natural world around them, made useful things, and shaped literati
				learning and political institutions. He has also published on the history of science, military
				history, and global history.
			</div>

			<figure class="w-[50%] h-full pr-12">
				<img src={profile} alt="Saltpeter" class="object-cover h-full float-right" />
			</figure>
		</div>
	</div>
</div>

<!-- Kang’s research focuses on the history of East Asian science and technology in a global -->
<!-- context, especially on the knowledge of Chosŏn Korean (1392–1910) artisans and military -->
<!-- practitioners in the early modern world. His first book project emphasizes the rise of -->
<!-- “engineers” amongst these artisans and practitioners and their system of material design and -->
<!-- production. He argues that the Korean experts developed a technological literacy that proved -->
<!-- innovative across various fields, that they won recognition for doing so, and that they -->
<!-- creatively remade global material culture, from guns and water pumps to steam engines. -->
<!-- Portions of this work have received the Turriano ICOHTEC Prize from the International -->
<!-- Committee for the History of Technology, the Joan Cahalin Robinson Prize from the Society -->
<!-- for the History of Technology, and the ICAS Book Prize (English—Best Dissertation in the -->
<!-- Humanities) from the International Convention of Asia Scholars. The project has been -->
<!-- supported by the American Council of Learned Societies, the Andrew F. Mellon Foundation, -->
<!-- Korea Foundation, and the American Historical Association. -->
<!-- <br /><br /> -->
<!-- Kang’s research in the history of science has been published in Isis: A Journal of the History -->
<!-- of Science Society, where his article emphasized the immobility of certain natural and technological -->
<!-- knowledge. His future book project will further intervene in the global history of science by -->
<!-- investigating “practical scholarship” in nineteenth-century Korea, namely, how a group of unemployed -->
<!-- scholars, physicians, and noblewomen vetted “useful knowledge” from the ever-expanding global -->
<!-- knowledge circuit. -->
