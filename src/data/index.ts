export const SITE_TITLE = "Sanju's Space";
export const SITE_DESCRIPTION = "A internet space for Sanju.";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
	{
		label: "ships",
		url: "/ships",
	},
];

export const title = "Sanju's Space";
export const description = "A internet space for Sanju.";
export const image = "/images/ogimage.png";
export const url = "https://sanju.sh";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Sanju's Space",
};


export const products = [
	{
		name: "Fli.so",
		url: "https://fli.so",
		image: "/products/fli.png",
		description: "A modern URL shortener with powerful analytics and customization features",
		categories: ["Web App", "SaaS"],
		technologies: ["Next.js", "TypeScript", "TailwindCSS"]
	},
	{
		name: "Uiino",
		url: "https://uiino.com",
		image: "/products/uiino.png",
		description: "A design system and component library for modern web applications",
		categories: ["Design System", "UI Library"],
		technologies: ["React", "TypeScript", "Storybook"]
	},
	{
		name: "SticAI",
		url: "https://sticai.com",
		image: "/products/sticai.png",
		description: "AI-powered sticker creation platform for messaging apps",
		categories: ["AI", "Creative Tools"],
		technologies: ["Python", "TensorFlow", "React"]
	},
	{
		name: "Dun",
		url: "https://dunsuite.com",
		image: "/products/dun.png",
		description: "A comprehensive suite of productivity tools for teams",
		categories: ["Productivity", "Team Tools"],
		technologies: ["Vue.js", "Node.js", "MongoDB"]
	},
	{
		name: "DunTasks",
		url: "https://duntasks.com",
		image: "/products/duntasks.png",
		description: "Simple and intuitive task management application",
		categories: ["Productivity", "Task Management"],
		technologies: ["React", "Firebase", "Material-UI"]
	},
];


export const socialLinks = [
	{
		label: "@x",
		url: "https://x.com/spikeysanju",
	},
	{
		label: "email",
		url: "mailto:work@sanju.sh",
	},
	{
		label: "github",
		url: "https://github.com/spikeysanju",
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/imsanju",
	},
];
