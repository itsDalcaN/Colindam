import { writable } from 'svelte/store';

export const autoExpandOnSearchSetting = writable(true);
export const requireExactMatchSetting = writable(false);
export const sortSongsAlphabeticallySetting = writable(true);
