import { writable, type Writable } from 'svelte/store';

export const locationStore: Writable<string> = writable('');

export const setLocation = (location: string) => {
	locationStore.set(location);
};
