import links from './links';

const shortlinks: Map<string, string> = new Map(Object.entries(links));

// You want to blackbox this process in a function, so that if you ever want to have
// a more complex way of defining links (perhaps an object like { link: "", plural: true }),
// you won't need to change anything other than this function to support it
export default function fetchRedirect(target: string): string | undefined {
	return shortlinks.get(target);
}
