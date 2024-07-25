const config = defineNuxtConfig({
	modules: ['@vueuse/nuxt', 'nuxt-svgo', 'dayjs-nuxt'],
	css: ['@/assets/styles/index.scss'],
	devtools: { enabled: true },

	svgo: {
		svgo: false,
		defaultImport: 'component',
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/styles/variables.scss";',
				},
			},
		},
	},
});

export default config;
