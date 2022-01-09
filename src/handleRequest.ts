import fetchRedirect from './fetchRedirect';
import responderFor from './responderFor';
import { WorkerResponse } from './types';
import { extractPath } from './utils';

export default function handleRequest({ request }: FetchEvent): WorkerResponse {
	// Modularize response handler so we can reuse it. We
	// use a factory to bind the request now so that
	// we have it if needed for a more advanced response
	const response = responderFor(request)

	try {
		// Get the pathname from the URL. This is our shortlink key
		const target = extractPath(request.url)
		if(!target) {
			// The target is our base domain without any path. This example uses some
			// simple HTML as a placeholder for a real homepage. In practice, you may
			// want to redirect to your standard homepage, if on a different domain
			return response.home()
		}

		// Lookup what URL the shortlink maps to, if any
		const destination = fetchRedirect(target);
		// Delegate to our response routine
		return response.to(destination);
	} catch(e) {
		// If something ever goes wrong, we still want to display
		// something to the user. Another option could be to redirect
		// to your homepage here, instead of passing null
		console.error(e);
		return response.to();
	}
}
