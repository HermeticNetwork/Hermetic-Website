import { writable } from 'svelte/store';
import translations from "../translation";

export const locale = writable("pt-BR");
export const locales = Object.keys(translations);