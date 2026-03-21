import { useQuery } from "@tanstack/react-query";
import type { Character, PlayerRanking } from "../backend.d";
import { SAMPLE_CHARACTERS, SAMPLE_LEADERBOARD } from "../data/characters";
import { useActor } from "./useActor";

export function useAllCharacters() {
  const { actor, isFetching } = useActor();
  return useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      if (!actor) return SAMPLE_CHARACTERS;
      try {
        const result = await actor.getAllCharacters();
        return result.length > 0 ? result : SAMPLE_CHARACTERS;
      } catch {
        return SAMPLE_CHARACTERS;
      }
    },
    enabled: !isFetching,
    placeholderData: SAMPLE_CHARACTERS,
  });
}

export function useCharacterById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Character | null>({
    queryKey: ["character", id.toString()],
    queryFn: async () => {
      if (!actor) return SAMPLE_CHARACTERS.find((c) => c.id === id) ?? null;
      try {
        const result = await actor.getCharacterById(id);
        return result ?? SAMPLE_CHARACTERS.find((c) => c.id === id) ?? null;
      } catch {
        return SAMPLE_CHARACTERS.find((c) => c.id === id) ?? null;
      }
    },
    enabled: !isFetching,
  });
}

export function useLeaderboard() {
  const { actor, isFetching } = useActor();
  return useQuery<PlayerRanking[]>({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      if (!actor) return SAMPLE_LEADERBOARD;
      try {
        const result = await actor.getLeaderboard();
        return result.length > 0 ? result : SAMPLE_LEADERBOARD;
      } catch {
        return SAMPLE_LEADERBOARD;
      }
    },
    enabled: !isFetching,
    placeholderData: SAMPLE_LEADERBOARD,
  });
}
