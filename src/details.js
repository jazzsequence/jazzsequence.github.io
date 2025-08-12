/**
 * jazzsequence.github.io
 */

// The links to display on your page. These will be listed in the same order that they appear here.
const links = [
	{
		name: "chrisreynolds.io",
		url: "https://chrisreynolds.io",
		icon: "link",
		// Refer to FontAwesome documentation to determine if an icon should be a fas or fab. (Brands are fab, so most will be fab.)
		// https://fontawesome.com/icons?d=gallery&p=2&m=free
		prefix: "fas"
	},
	{
		name: "personal blog",
		icon: "link",
		url: "https://jazzsequence.com",
		prefix: "fas"
	},
	{
		name: "Sad Bastard Music Club",
		icon: "heart-broken",
		url: "https://us1.campaign-archive.com/home/?u=4085972eca88b58d063f1b9a5&id=85460dd934",
		prefix: "fas"
	},
	{
		name: "Community + Code",
		icon: "podcast",
		url: "https://communitycode.dev",
		prefix: "fas"
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/jazzsequence.com",
		icon: "bluesky",
		prefix: "fab"
	},
	{
		name: "GitHub",
		url: "https://github.com/jazzsequence",
		icon: "github",
		prefix: "fab"
	},	
	{
		name: "DMsGuild",
		icon: "d-and-d",
		url: "https://www.dmsguild.com/browse.php?author=Chris%20Reynolds",
		prefix: "fab"
	},
	{
		name: "Instagram",
		url: "https://instagram.com/jazzs3quence",
		icon: "instagram",
		prefix: "fab"
	},
	{
		name: "Spotify",
		url: "https://open.spotify.com/user/jazzsequence?si=L089uKp5RWeKInyh6Mcl1A",
		icon: "spotify",
		prefix: "fab"
	},
	{
		name: "The WP World",
		url: "https://thewp.world/presser/chris-reynolds/",
		icon: "map",
		prefix: "fas"
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/chrissreynolds/",
		icon: "linkedin",
		prefix: "fab"
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/c/ChrisReynolds_jazzsequence",
		icon: "youtube",
		prefix: "fab"
	},
	{
		name: "WordPress.org",
		url: "https://profiles.wordpress.org/jazzs3quence/",
		icon: "wordpress",
		prefix: "fab"
	},
	{
		name: "StartPlaying.games",
		icon: "dice-d20",
		url: "https://startplaying.games/gm/jazzsequence",
		prefix: "fas"
	},
	{
		name: "Mastodon",
		url: "https://mstdn.social/@jazzsequence",
		icon: "mastodon",
		prefix: "fab",
		rel: "me"
	},
	{
		name: "Tumblr",
		url: "https://jazzsequence.tumblr.com",
		icon: "tumblr",
		prefix: "fab"
	},
	{
		name: "Twitter",
		url: "https://twitter.com/jazzs3quene",
		icon: "twitter",
		prefix: "fab"
	},
	{
		name: "Twitch",
		url: "https://twitch.tv/jazzsequence",
		icon: "twitch",
		prefix: "fab"
	},
	{
		name: "Bandcamp",
		url: "https://music.jazzsequence.com",
		icon: "bandcamp",
		prefix: "fab"
	},
	{
		name: "Soundcloud",
		url: "https://soundcloud.com/jazzs3quence",
		icon: "soundcloud",
		prefix: "fab"
	},
	{
		name: "Mixcloud",
		url: "https://mixcloud.com/jazzsequence",
		icon: "mixcloud",
		prefix: "fab"
	},
	{
		name: "Facebook",
		url: "https://facebook.com/jazzsequence",
		icon: "facebook",
		prefix: "fab"
	},
	{
		name: "Brewfiles",
		url: "https://www.brewfiles.com/brew/KLMTzN28kH3Ym4chgPvw/",
		icon: "beer",
		prefix: "fas"
	},
	{
		name: "Contact",
		url: "https://jazzsequence.com/about/#nf-form-title-1",
		icon: "inbox",
		prefix: "fas"
	}
];

// Your personal information.
const profile = {
	name: "Chris Reynolds",
	pronouns: "he/they", // Your pronouns.
	bio: "Senior Developer Advocate, web software engineer, Dungeon Master, occasional musician, weekend DJ and writer.",
	image: "https://www.dropbox.com/s/0ux2c09lske2wmq/chris-hiking-square-2021-low-res.jpg?raw=1"
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
