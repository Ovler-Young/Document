import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "docs",

	title: "Ovler's Documents",
	description: "Document for Ovler's side projects!",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "EFB", link: "/efb" },
			{ text: "Vocaloid", link: "/vocaloid" },
			{ text: "STWP", link: "/stwp" },
			{ text: "Others", link: "/others" }
		],

		sidebar: generateSidebar({
			documentRootPath: "/docs",
			collapsed: false,
			capitalizeFirst: true,
			includeFolderIndexFile: true,
		}),

		socialLinks: [
			{ icon: "github", link: "https://github.com/Ovler-Young/Document" },
			{ icon: "telegram", link: "https://t.me/Ovler" },
		],
	},
});
