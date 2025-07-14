<script lang="ts">
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';

	let {
		textColor,
		backgroundColor
	}: {
		textColor: string;
		backgroundColor: string;
	} = $props();
</script>

<Logo overlayColor={textColor} sticky={true} />
<Tabs overlayColor={textColor} {backgroundColor} />

<div
	class="dark min-h-screen w-screen flex flex-col font-crimson
        space-y-8 px-8 pb-12 pt-32"
	style:background-color={backgroundColor}
	style:color={textColor}
>
	<div class="text-xl">
		Professor Kang is a historian of early modern Korea, with research and teaching interests in the
		history of science, the history of technology, and global material culture.
	</div>
	<div class="text-md">
		Kang’s research focuses on the history of East Asian science and technology in a global context,
		especially on the knowledge of Chosŏn Korean (1392–1910) artisans and military practitioners in
		the early modern world. His first book project emphasizes the rise of “engineers” amongst these
		artisans and practitioners and their system of material design and production. He argues that
		the Korean experts developed a technological literacy that proved innovative across various
		fields, that they won recognition for doing so, and that they creatively remade global material
		culture, from guns and water pumps to steam engines. Portions of this work have received the
		Turriano ICOHTEC Prize from the International Committee for the History of Technology, the Joan
		Cahalin Robinson Prize from the Society for the History of Technology, and the ICAS Book Prize
		(English—Best Dissertation in the Humanities) from the International Convention of Asia
		Scholars. The project has been supported by the American Council of Learned Societies, the
		Andrew F. Mellon Foundation, Korea Foundation, and the American Historical Association.
	</div>
	<div class="text-md">
		Kang’s research in the history of science has been published in Isis: A Journal of the History
		of Science Society, where his article emphasized the immobility of certain natural and
		technological knowledge. His future book project will further intervene in the global history of
		science by investigating “practical scholarship” in nineteenth-century Korea, namely, how a
		group of unemployed scholars, physicians, and noblewomen vetted “useful knowledge” from the
		ever-expanding global knowledge circuit.
	</div>
	<div class="text-md">
		Kang is a digital humanist as well. His DH projects include a network analysis of international
		criminals in seventeenth-century Nagasaki, published in the Journal of Cultural Analytics. He
		also works with imaging scientists, designers, and precision metalworkers to critically “rework”
		historical material culture, which has included disassembling and CT scanning artifacts, mocking
		up mechanical drawings in 3D, and fabricating prototypes for testing. Finally, with Michelle
		Suh, he co-designed the search engine and research platform Silloker, which provides exploratory
		data analysis on five centuries of historical data from Chosŏn Korea.
	</div>
	<div class="text-md">
		His research has also appeared (or is forthcoming) in the fields of ethnomusicology, diplomatic
		history, and global military history, in venues such as Routledge Handbook of Asian Music,
		Journal of World History, The Military Revolution and Revolutions in Military Affairs, and The
		Journal of Asian Studies.
	</div>
	<div class="text-md">
		Prior to joining the WashU faculty in 2021, he was a D. Kim Postdoctoral Fellow in the
		Department of the History of Science and Technology, Johns Hopkins University. He received his
		Ph.D. in History and East Asian Languages from Harvard University.
	</div>
</div>
