import type { Character } from "../backend.d";

export const SAMPLE_CHARACTERS: Character[] = [
  {
    id: 1n,
    name: "LUNA VERDE",
    country: "Brazil",
    countryFlag: "🇧🇷",
    bio: "Star midfielder turned battlefield commander. Her jogo bonito footwork makes her impossible to catch.",
    stats: { speed: 95n, strength: 70n, stealth: 65n, specialRating: 88n },
    specialAbility: {
      abilityName: "Samba Rush",
      abilityDescription:
        "Luna enters a flow state, gaining 40% movement speed and leaving a trail of decoys that confuse enemies for 5 seconds. Perfect for flanking or escaping ambushes.",
    },
  },
  {
    id: 2n,
    name: "TIAGO FLAMA",
    country: "Spain",
    countryFlag: "🇪🇸",
    bio: "Legendary striker with explosive pace. Translates his penalty-box instincts into lethal precision on the battlefield.",
    stats: { speed: 88n, strength: 82n, stealth: 55n, specialRating: 85n },
    specialAbility: {
      abilityName: "El Rayo",
      abilityDescription:
        "Tiago sprints at lightning speed in a straight line, knocking back all enemies in his path and dealing damage. Short cooldown, massive impact.",
    },
  },
  {
    id: 3n,
    name: "LI WEI",
    country: "China",
    countryFlag: "🇨🇳",
    bio: "Martial arts grandmaster and national hero. Combines ancient wushu discipline with modern tactical warfare.",
    stats: { speed: 80n, strength: 90n, stealth: 75n, specialRating: 92n },
    specialAbility: {
      abilityName: "Dragon Strike",
      abilityDescription:
        "Li Wei channels chi energy into a devastating palm strike that penetrates armor and stuns enemies in a cone. Can shatter enemy shields.",
    },
  },
  {
    id: 4n,
    name: "YUNA STORM",
    country: "South Korea",
    countryFlag: "🇰🇷",
    bio: "K-pop idol by day, battlefield tactician by night. Her choreographed combat style bewilders even elite soldiers.",
    stats: { speed: 90n, strength: 60n, stealth: 85n, specialRating: 90n },
    specialAbility: {
      abilityName: "Idol Sync",
      abilityDescription:
        "Yuna broadcasts a disorienting sonic frequency that jams enemy radar and reduces their accuracy by 30% for 8 seconds. Teammates gain a speed boost.",
    },
  },
  {
    id: 5n,
    name: "KOFI THUNDER",
    country: "Nigeria",
    countryFlag: "🇳🇬",
    bio: "Afrobeats global superstar whose concert crowds learned long ago — when Kofi drops the beat, the whole arena shakes.",
    stats: { speed: 75n, strength: 85n, stealth: 70n, specialRating: 87n },
    specialAbility: {
      abilityName: "Bass Drop",
      abilityDescription:
        "Kofi releases a seismic shockwave from his speaker gear that knocks down all nearby enemies and destroys cover in a 15-meter radius.",
    },
  },
  {
    id: 6n,
    name: "JAYLEN APEX",
    country: "USA",
    countryFlag: "🇺🇸",
    bio: "NBA legend turned elite operative. Seven-footer with vertical leap stats that defy human physics.",
    stats: { speed: 82n, strength: 95n, stealth: 50n, specialRating: 88n },
    specialAbility: {
      abilityName: "Posterize",
      abilityDescription:
        "Jaylen leaps over obstacles and barriers, slam-dunking grenades onto enemy positions from above. Deals massive area damage and provides brief aerial reconnaissance.",
    },
  },
  {
    id: 7n,
    name: "SAKURA KAGE",
    country: "Japan",
    countryFlag: "🇯🇵",
    bio: "Olympic fencing gold medalist trained in Iga ninja arts. Strikes before you see the blade.",
    stats: { speed: 92n, strength: 72n, stealth: 98n, specialRating: 91n },
    specialAbility: {
      abilityName: "Shadow Bloom",
      abilityDescription:
        "Sakura becomes invisible for 6 seconds while scattering sakura petal decoys that trigger false enemy detection. Ideal for deep infiltration.",
    },
  },
  {
    id: 8n,
    name: "PRIYA AGNI",
    country: "India",
    countryFlag: "🇮🇳",
    bio: "Bollywood action star with real special forces training. Her stunt repertoire is her deadliest weapon.",
    stats: { speed: 85n, strength: 78n, stealth: 80n, specialRating: 86n },
    specialAbility: {
      abilityName: "Masala Blitz",
      abilityDescription:
        "Priya performs a spinning multi-hit combo attack on up to 3 enemies simultaneously, dealing extra damage to armored targets and igniting flammable surfaces.",
    },
  },
  {
    id: 9n,
    name: "IVAN GAMBIT",
    country: "Russia",
    countryFlag: "🇷🇺",
    bio: "World chess champion who mapped every battle royale strategy before setting foot on the island.",
    stats: { speed: 60n, strength: 75n, stealth: 88n, specialRating: 95n },
    specialAbility: {
      abilityName: "Grandmaster's Gambit",
      abilityDescription:
        "Ivan reveals all enemy positions on the minimap for 12 seconds and predicts their movement paths. Teammates also gain the intel overlay.",
    },
  },
  {
    id: 10n,
    name: "AMARA SWIFT",
    country: "Kenya",
    countryFlag: "🇰🇪",
    bio: "Four-time Olympic sprint champion. The fastest human alive now runs circles around the zone.",
    stats: { speed: 99n, strength: 68n, stealth: 72n, specialRating: 89n },
    specialAbility: {
      abilityName: "Rift Run",
      abilityDescription:
        "Amara enters a supersonic sprint that passes through obstacles and leaves behind afterimages that absorb 2 bullets each before dissipating.",
    },
  },
  {
    id: 11n,
    name: "MARCOS TITAN",
    country: "Mexico",
    countryFlag: "🇲🇽",
    bio: "Legendary Lucha Libre champion turned mercenary. Enters every fight with a theatrical entrance and exits victorious.",
    stats: { speed: 72n, strength: 98n, stealth: 45n, specialRating: 84n },
    specialAbility: {
      abilityName: "La Llave",
      abilityDescription:
        "Marcos grabs the nearest enemy and performs an unstoppable throw that deals damage and creates a small shockwave on impact, knocking down any nearby enemies.",
    },
  },
  {
    id: 12n,
    name: "ASTRID CIPHER",
    country: "Sweden",
    countryFlag: "🇸🇪",
    bio: "Tech prodigy and hacker goddess. Turned a garage startup into a global empire and now hacks the battlefield itself.",
    stats: { speed: 68n, strength: 62n, stealth: 90n, specialRating: 96n },
    specialAbility: {
      abilityName: "Zero-Day",
      abilityDescription:
        "Astrid deploys a drone that hacks enemy equipment — disabling shields, detonating grenades, and rerouting vehicle controls for 10 seconds within 30 meters.",
    },
  },
];

export const SAMPLE_LEADERBOARD = [
  {
    rank: 1n,
    playerName: "ShadowWolf_BR",
    characterId: 7n,
    kills: 2847n,
    wins: 312n,
    gamesPlayed: 890n,
  },
  {
    rank: 2n,
    playerName: "LunaticFringe",
    characterId: 1n,
    kills: 2631n,
    wins: 287n,
    gamesPlayed: 842n,
  },
  {
    rank: 3n,
    playerName: "ApexKofi99",
    characterId: 5n,
    kills: 2520n,
    wins: 271n,
    gamesPlayed: 798n,
  },
  {
    rank: 4n,
    playerName: "DragonMaster_CN",
    characterId: 3n,
    kills: 2388n,
    wins: 254n,
    gamesPlayed: 755n,
  },
  {
    rank: 5n,
    playerName: "SwiftAmara",
    characterId: 10n,
    kills: 2241n,
    wins: 239n,
    gamesPlayed: 710n,
  },
  {
    rank: 6n,
    playerName: "GrandIvan",
    characterId: 9n,
    kills: 2109n,
    wins: 218n,
    gamesPlayed: 680n,
  },
  {
    rank: 7n,
    playerName: "YunaFan2049",
    characterId: 4n,
    kills: 1987n,
    wins: 201n,
    gamesPlayed: 645n,
  },
  {
    rank: 8n,
    playerName: "TitanMex",
    characterId: 11n,
    kills: 1876n,
    wins: 189n,
    gamesPlayed: 612n,
  },
  {
    rank: 9n,
    playerName: "CipherSweden",
    characterId: 12n,
    kills: 1754n,
    wins: 178n,
    gamesPlayed: 580n,
  },
  {
    rank: 10n,
    playerName: "AgniPriya_x",
    characterId: 8n,
    kills: 1632n,
    wins: 165n,
    gamesPlayed: 550n,
  },
];
