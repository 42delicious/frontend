import { PUBLIC_SERVER_URI } from '$env/static/public';
import { rest } from 'msw';
import { restaurants } from './data/restaurants';
export const handlers = [
	rest.get(`${PUBLIC_SERVER_URI}/restaurants`, (req, res, ctx) => {
		const cluster = req.url.searchParams.get('cluster');
		const result = restaurants.filter((restaurant) => {
			if (cluster) {
				return restaurant.location === cluster;
			}
			return true;
		});
		return res(ctx.status(200), ctx.json(result));
	}),
	rest.get(`${PUBLIC_SERVER_URI}/restaurants/:id`, (req, res, ctx) => {
		const id = Number(req.params.id);
		const result = restaurants.find((restaurant) => {
			return restaurant.id === id;
		});
		if (result) {
			return res(ctx.status(200), ctx.json(result));
		} else {
			return res(ctx.status(404));
		}
	})
];
