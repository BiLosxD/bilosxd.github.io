<template>
	<div id="navbar">
		<div class="nav_left">
			<router-link rel="canonical" to="/" class="logo">BRSTAMARIA</router-link>
		</div>
		<div :class="`burger ${(toggledBurger) ? 'toggled' : ''}`" @click="toggleBurger()">
			<div class="bar_wrapper">
				<div class="top bar"></div>
				<div class="middle bar"></div>
				<div class="bottom bar"></div>
			</div>
		</div>
		<div :class="`nav_parent ${(toggledBurger) ? 'opened' : ''}`">
			<ul itemscope itemtype="https://schema.org/SiteNavigationElement" class="nav_list">
				<li class="list_item">
					<div @click="toggleBurger('#home')" class="item_link">Home</div>
				</li>
				<li class="list_item">
					<div @click="toggleBurger('#about')" class="item_link">About</div>
				</li>
				<li class="list_item">
					<div @click="toggleBurger()" class="item_link">Portfolio</div>
				</li>
				<li class="list_item">
					<div @click="toggleBurger()" class="item_link">Contact</div>
				</li>
				<li class="social_item_list">
					<ul class="social_list">
						<li class="social_item">
							<a href="https://www.linkedin.com/in/billy-ross-sta-maria-ba4670183/" target="_blank">
								<svg class="social_link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fill" d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
							</a>
						</li>
						<li class="social_item">
							<a href="https://www.facebook.com/billyross.stamaria" target="_blank">
								<svg class="social_link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fill" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	export default {
		data () {
			return {
				toggledBurger: false
			}
		},
		methods: {
			toggleBurger (id = null) {
				const me = this
				me.toggledBurger ^= true
				if (id != null) {
					me.$scrollTo(`${id}`, {
						offset: -250
					})
				}
			}
		}
	}
</script>
