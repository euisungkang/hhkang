<script lang="ts">
	// import profile from '$lib/media/p.webp';
	const profile: string = 'https://ik.imagekit.io/easton/hhkang/images/Profile1.jpg';
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
	<div class="w-[70vw] h-[90vh] overflow-hidden pt-20">
		<div class="w-full h-12/12 flex">
			<div
				class="w-[50%] h-full text-base 2xl:text-[1.2rem] flex items-start font-crimson pr-2 prose prose-light"
			>
				<div>
					Professor Hyeok Hweon “H. H.” Kang grew up in Guatemala City, Guatemala. He received his
					B.A. from Emory University and Ph.D. in History and East Asian Languages from Harvard
					University. A historian of early modern Korea, he joined the WashU faculty in 2021 as
					Assistant Professor of
					<a href="https://ealc.wustl.edu/" target="_blank"> East Asian Languages and Cultures</a>.
					<br /><br />
					Kang’s first book, <i>Artisanal Heart: State, Craft, and Science in Early Modern Korea</i>
					(under contract with the University of Chicago Press), examines how the Chosŏn (1392–1910) state
					supported its artisans and “ingeniators,” fostering a vibrant culture of mechanical scholarship
					and material production. His research on this subject has received international awards including
					the Joan Cahalin Robinson Prize from the
					<a href="https://www.historyoftechnology.org/" target="_blank">
						Society for the History of Technology
					</a>; the ICAS Book Prize (Best Dissertation in the Humanities) from the
					<a href="https://icas.asia/" target="_blank"
						>International Convention of Asia Scholars
					</a>; and the Juanelo Turriano Prize from the
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
					Professor Kang’s research focuses on the intellectual and cultural history of Chosŏn Korea.
					He is particularly interested in how socially marginalized people, like artisans and practitioners,
					studied the natural world, made useful things, and transformed elite learning and political
					institutions.
				</div>
			</div>

			<figure class="w-[50%] h-full pr-0">
				<img src={profile} alt="Saltpeter" class="object-cover h-full float-right" />
			</figure>
		</div>
	</div>
</div>
