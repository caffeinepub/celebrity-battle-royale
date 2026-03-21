import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Stats {
    stealth: bigint;
    speed: bigint;
    strength: bigint;
    specialRating: bigint;
}
export interface SpecialAbility {
    abilityName: string;
    abilityDescription: string;
}
export interface Character {
    id: bigint;
    bio: string;
    country: string;
    specialAbility: SpecialAbility;
    name: string;
    countryFlag: string;
    stats: Stats;
}
export interface PlayerRanking {
    gamesPlayed: bigint;
    rank: bigint;
    wins: bigint;
    playerName: string;
    characterId: bigint;
    kills: bigint;
}
export interface backendInterface {
    getAllCharacters(): Promise<Array<Character>>;
    getCharacterById(id: bigint): Promise<Character | null>;
    getLeaderboard(): Promise<Array<PlayerRanking>>;
}
