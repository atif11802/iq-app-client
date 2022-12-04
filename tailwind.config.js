/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				Patrick: ["Patrick Hand", ...defaultTheme.fontFamily.sans],
				Indie: ["Indie Flower", ...defaultTheme.fontFamily.sans],
				Hyeon: ["Do Hyeon", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
