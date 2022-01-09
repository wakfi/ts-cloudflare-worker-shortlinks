import { Responder, WorkerResponse } from './types';
import home from './assets/home';

export default function responderFor(request: Request): Responder {
	return {
		home: () => {
			return new Response(home, {
				headers: {
					'content-type': 'text/html;charset=UTF-8'
				}
			});
		},
		to: (destination?: string): WorkerResponse => {
			if(!destination) {
				// Very basic 404 Not Found response
				return new Response('Shortlink not found', {
					status: 404,
					statusText: 'Not Found'
				});

				// If your site has a custom 404 page, use this instead.
				// Or, if using this alongside a normal website on the same
				// domain, also use this instead so that your non-shortlink
				// pages still work
				return fetch(request);
			}

			// HTTP 307 is essentially the same as 302, but solves some problems
			// caused by some early web clients. See
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307 for
			// more details
			return Response.redirect(destination, 307);
		}
	}
}
