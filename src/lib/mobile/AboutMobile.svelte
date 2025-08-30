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
        space-y-8 px-8 pb-12 pt-32 prose prose-light"
	style:background-color={backgroundColor}
	style:color={textColor}
>
	<div class="text-xl">
		Professor Hyeok Hweon “H. H.” Kang grew up in Guatemala City, Guatemala. He received his B.A.
		from Emory University and Ph.D. in History and East Asian Languages from Harvard University. A
		historian of early modern Korea, he joined the WashU faculty in 2021 as Assistant Professor of
		<a href="https://ealc.wustl.edu/" target="_blank"> East Asian Languages and Cultures</a>.
	</div>

	<div class="text-md">
		Kang’s first book, <i>Artisanal Heart: Statecraft and Technology in Early Modern Korea</i>
		(under contract with the University of Chicago Press), examines how the Chosŏn (1392–1910) state
		supported its artisans and “ingeniators,” fostering a vibrant culture of mechanical scholarship and
		material production. His research on this subject has received international awards including the
		Joan Cahalin Robinson Prize from the
		<a href="https://www.historyoftechnology.org/" target="_blank">
			Society for the History of Technology
		</a>; the ICAS Book Prize (Best Dissertation in the Humanities) from the
		<a href="https://icas.asia/" target="_blank">International Convention of Asia Scholars </a>; and
		the Juanelo Turriano Prize from the
		<a href="https://www.icohtec.org/" target="_blank">
			International Committee for the History of Technology
		</a>.
		<br /><br />
		In 2023–24, Kang was awarded an
		<a href="https://www.acls.org/" target="_blank">
			American Council of Learned Societies Fellowship
		</a>. In 2020–21, he held a
		<a href="http://dkimfoundation.org/wp5/" target="_blank"> D. Kim Foundation </a>
		Postdoctoral Fellowship at the
		<a href="https://host.jhu.edu/" target="_blank">
			Department of the History of Science and Technology
		</a>
		at Johns Hopkins University. Currently, he co-chairs the
		<a href="https://fhsasiahss.wordpress.com/" target="_blank">
			Forum for the History of Science in Asia
		</a>
		at the <a href="https://hssonline.org/" target="_blank">History of Science Society</a>.
		<br /><br />
		Professor Kang’s research focuses on the intellectual and cultural history of Chosŏn Korea. He is
		particularly interested in how socially marginalized people, like artisans and practitioners, studied
		the natural world, made useful things, and transformed elite learning and political institutions.
		<br /><br />
		Professor Kang has wide-ranging interests in digital humanities and material culture studies. His
		projects include a network analysis of international criminals in seventeenth-century Nagasaki, published
		in the
		<a
			href="https://culturalanalytics.org/article/68188-how-network-analysis-uncovers-international-networks-of-smuggling-history-criminals-in-nagasaki-japan-circa-1667"
			target="_blank"
		>
			<i>Journal of Cultural Analytics</i>
		</a>
		. He also collaborates with imaging scientists, game designers, and mechanical engineers to critically
		“rework” historical material culture. This work spans CT scanning of artifacts, 3D modeling of artisanal
		drawings, and prototype fabrication for experimental testing—applied across a diverse array of objects
		such as sundials, water pumps, and steam engines.
		<br /><br />
		Kang collects and disassembles matchlock guns from the early modern period to reverse engineer their
		mechanisms and reconstruct the systems of knowledge, use, and production around them. His research
		on the subject was published in
		<a href="https://www.tandfonline.com/doi/full/10.1080/07341512.2022.2153206" target="_blank">
			<i> History and Technology </i>
		</a>
		and the
		<a href="https://muse.jhu.edu/pub/5/article/957972/pdf" target="_blank">
			<i>Journal of World History</i>
		</a>
		. His collection includes artifacts from Chosŏn Korea, Tokugawa Japan, and Portuguese Malacca.
	</div>
</div>
