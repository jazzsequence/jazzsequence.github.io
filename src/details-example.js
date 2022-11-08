/**
 * Example user info for your chain of saplings 🔗🌲.
 * Update the fields with your information.
 */

// The links to display on your page. These will be listed in the same order that they appear here.
const links = [
	{
		name: "Personal Site",
		url: "https://yoursite.com",
		icon: "link",
		// Refer to FontAwesome documentation to determine if an icon should be a fas or fab. (Brands are fab, so most will be fab.)
		// https://fontawesome.com/icons?d=gallery&p=2&m=free
		prefix: "fas",
		rel: "me"
	},
	{
		name: "Twitter",
		url: "https://twitter.com/yourusername",
		icon: "twitter",
		prefix: "fab",
		rel: "me"
	},
	{
		name: "Facebook",
		url: "https://facebook.com/yourusername",
		icon: "facebook",
		prefix: "fab",
		rel: "me"
	},
	{
		name: "YouTube",
		url: "https://youtube.com/yourchannel",
		icon: "youtube",
		prefix: "fab",
		rel: "me"
	},
	{
		name: "GitHub",
		url: "https://github.com/yourusername",
		icon: "github",
		prefix: "fab",
		rel: "me"
	}
];

// Your personal information.
const profile = {
	name: "Your Name",
	pronouns: "they/them/theirs", // Your pronouns.
	bio: "Some info about you",
	image: "https://link.to/your-profile-image.jpg"
};

// You can optionally customize the color scheme that will be used.
// If you like, you can create your own color schemes. These will be
// added as classes to the main component.
const colorScheme = "solarized";

// Don't edit below this line!
const details = {
	links,
	profile,
	colorScheme
}

// Export each detail individually in case they are needed.
export { profile };
export { colorScheme };
export { links };

export default details;
