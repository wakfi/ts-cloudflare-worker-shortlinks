export function extractPath(urlString: string): string | null {
	try {
		const url = new URL(urlString);
		const path = url.pathname.slice(1);
		return path
	} catch {
		return null
	}
}
