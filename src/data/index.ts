export const SITE_TITLE = "Andryon's Space";
export const SITE_DESCRIPTION = "A internet space for Andryon.";

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

export const title = "Andryon's Space";
export const description = "A internet space for Andryon.";
export const image = "/images/ogimage.png";
export const url = "https://andryon.space";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Andryon's Space",
};


export const products = [
	{
		name: "staria coffee",
		url: "https://www.instagram.com/kopi.staria/",
		image: "/products/logo-staria.png",
		description: "A coffee shop that serves a variety of coffee and tea",
		categories: ["Coffee"],
		technologies: ["Instagram", "Social Media"]
	},
	{
		name: "rollova studio",
		url: "https://rollovastudio.framer.website",
		image: "/products/logo-rollova.png",
		description: "Turn ideas into MVPs in a week",
		categories: ["MVP", "Digital Agency", "Framer", "Web Design", "Web Development"],
		technologies: ["Framer", "Web Design", "Web Development"]
	},
	{
		name: "bytenova",
		url: "https://bytenova.vercel.app",
		image: "/products/logo-bytenova.png",
		description: "A platform that brings innovative and environmentally-responsive concepts in its endeavor to create sustainable solutions in carbon emission reduction.",
		categories: ["Carbon Emission Reduction"],
		technologies: ["Python", "TensorFlow", "React"]
	},
];


export const socialLinks = [
	{
		label: "instagram",
		url: "https://www.instagram.com/ui.andryon",
	},
	{
		label: "threads",
		url: "https://www.threads.net/@ui.andryon",
	},
	{
		label: "email",
		url: "mailto:halo@jiwakreator.com",
	},
	{
		label: "github",
		url: "https://github.com/andryon",
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/andryon",
	},
];
