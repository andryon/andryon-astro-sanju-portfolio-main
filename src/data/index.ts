export const SITE_TITLE = "Andryon's Space";
export const SITE_DESCRIPTION = "A space for Andryon to share his thoughts and projects.";

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
		label: "projects",
		url: "/projects",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	}
];

export const title = "Andryon's Space";
export const description = "A space for Andryon to share his thoughts and projects.";
export const image = "/images/ogimage.png";
export const url = "https://jiwakreator.com";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Andryon's Space",
};


export const products = [
	{
		name: "Staria Coffee",
		url: "https://instagram.com/kopi.staria",
		image: "/products/logo-staria.png",
		description: "A coffee shop that serves a variety of coffee.",
		categories: ["Coffee", "Coffee Shop"],
		technologies: ["Instagram"]
	}
];


export const socialLinks = [
	{
		label: "instagram",
		url: "https://www.instagram.com/andrian.chyn",
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
		url: "https://www.linkedin.com/in/andriputro",
	},
];
