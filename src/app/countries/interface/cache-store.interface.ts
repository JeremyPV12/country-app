import { Country } from "./country"
import { Region } from "./region.type";

export interface CacheStore {
    byCapital: TermCountries;
    byCountries: TermCountries;
    byRegion: TermRegion;
}

export interface TermCountries {
    term : string,
    countries : Country[]
}

export interface TermRegion {
    region : Region,
    countries : Country[]
}