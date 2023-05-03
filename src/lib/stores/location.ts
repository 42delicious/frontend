import { writable, type Writable } from 'svelte/store';
import { getDistance } from '$lib/utils';

export const locationStore: Writable<string> = writable('');

const coords = {
	seocho: { lat: 37.4921415, lng: 127.0300294 },
	gaepo: { lat: 37.4881993, lng: 127.0647495 }
};

const compareDistance = (lat: number, lng: number) => {
	const seocho = getDistance(lat, lng, coords.seocho.lat, coords.seocho.lng);
	const gaepo = getDistance(lat, lng, coords.gaepo.lat, coords.gaepo.lng);

	return seocho < gaepo ? 'seocho' : 'gaepo';
};

export const setLocation = (location: string) => {
	locationStore.set(location);
};

export const initLocation = () => {
	if (!navigator.geolocation) {
		console.error('위치정보를 이용할 수 없습니다.');
		setLocation('gaepo');
	}

	navigator.geolocation.getCurrentPosition((position) => {
		const { latitude, longitude } = position.coords;
		setLocation(compareDistance(latitude, longitude));
	});
};
