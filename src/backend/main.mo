import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Stats = {
    speed : Nat;
    strength : Nat;
    stealth : Nat;
    specialRating : Nat;
  };

  type SpecialAbility = {
    abilityName : Text;
    abilityDescription : Text;
  };

  type Character = {
    id : Nat;
    name : Text;
    country : Text;
    countryFlag : Text;
    bio : Text;
    stats : Stats;
    specialAbility : SpecialAbility;
  };

  type PlayerRanking = {
    playerName : Text;
    characterId : Nat;
    rank : Nat;
    kills : Nat;
    wins : Nat;
    gamesPlayed : Nat;
  };

  module PlayerRanking {
    public func compareByWins(a : PlayerRanking, b : PlayerRanking) : Order.Order {
      Nat.compare(b.wins, a.wins);
    };
  };

  let characters = [
    {
      id = 1;
      name = "Elvis Presley";
      country = "United States";
      countryFlag = "🇺🇸";
      bio = "The King of Rock and Roll, known for his incredible charisma and stage presence.";
      stats = {
        speed = 60;
        strength = 75;
        stealth = 50;
        specialRating = 90;
      };
      specialAbility = {
        abilityName = "Jailhouse Rock";
        abilityDescription = "Stuns enemies in a wide area with an explosive dance move.";
      };
    },
    {
      id = 2;
      name = "Freddie Mercury";
      country = "United Kingdom";
      countryFlag = "🇬🇧";
      bio = "Legendary Queen frontman, unmatched vocals and energy.";
      stats = {
        speed = 80;
        strength = 65;
        stealth = 55;
        specialRating = 85;
      };
      specialAbility = {
        abilityName = "Bohemian Rhapsody";
        abilityDescription = "Creates a disorienting sonic wave that confuses opponents.";
      };
    },
    {
      id = 3;
      name = "Marilyn Monroe";
      country = "United States";
      countryFlag = "🇺🇸";
      bio = "Iconic actress and model, famous for her charm.";
      stats = {
        speed = 70;
        strength = 50;
        stealth = 85;
        specialRating = 80;
      };
      specialAbility = {
        abilityName = "Gentlemen Prefer Blondes";
        abilityDescription = "Hypnotizes enemies, lowering their defenses.";
      };
    },
    {
      id = 4;
      name = "David Bowie";
      country = "United Kingdom";
      countryFlag = "🇬🇧";
      bio = "Innovative musician and fashion icon, master of transformation.";
      stats = {
        speed = 75;
        strength = 60;
        stealth = 70;
        specialRating = 95;
      };
      specialAbility = {
        abilityName = "Space Oddity";
        abilityDescription = "Teleports short distances, confusing the enemy.";
      };
    },
    {
      id = 5;
      name = "Bruce Lee";
      country = "China";
      countryFlag = "🇨🇳";
      bio = "Martial arts legend, renowned for his speed and agility.";
      stats = {
        speed = 100;
        strength = 90;
        stealth = 65;
        specialRating = 85;
      };
      specialAbility = {
        abilityName = "One Inch Punch";
        abilityDescription = "Delivers a devastating knockout blow at close range.";
      };
    },
    {
      id = 6;
      name = "Bob Marley";
      country = "Jamaica";
      countryFlag = "🇯🇲";
      bio = "Reggae music icon, loved for his peaceful energy.";
      stats = {
        speed = 65;
        strength = 55;
        stealth = 75;
        specialRating = 90;
      };
      specialAbility = {
        abilityName = "Three Little Birds";
        abilityDescription = "Heals teammates within a radius over time.";
      };
    },
    {
      id = 7;
      name = "Albert Einstein";
      country = "Germany";
      countryFlag = "🇩🇪";
      bio = "World-renowned physicist and thinker.";
      stats = {
        speed = 50;
        strength = 40;
        stealth = 95;
        specialRating = 100;
      };
      specialAbility = {
        abilityName = "Relativity Shift";
        abilityDescription = "Slows down time in a small area.";
      };
    },
    {
      id = 8;
      name = "Cleopatra";
      country = "Egypt";
      countryFlag = "🇪🇬";
      bio = "Famed ancient queen known for her beauty and intelligence.";
      stats = {
        speed = 85;
        strength = 60;
        stealth = 80;
        specialRating = 90;
      };
      specialAbility = {
        abilityName = "Queen's Command";
        abilityDescription = "Gains control over enemy minions temporarily.";
      };
    },
    {
      id = 9;
      name = "Nikola Tesla";
      country = "Serbia";
      countryFlag = "🇷🇸";
      bio = "Brilliant inventor and electrical engineer.";
      stats = {
        speed = 60;
        strength = 45;
        stealth = 90;
        specialRating = 100;
      };
      specialAbility = {
        abilityName = "Electric Storm";
        abilityDescription = "Creates electrical barriers and attacks.";
      };
    },
    {
      id = 10;
      name = "Frida Kahlo";
      country = "Mexico";
      countryFlag = "🇲🇽";
      bio = "Famed artist, known for her resilience and creativity.";
      stats = {
        speed = 70;
        strength = 55;
        stealth = 80;
        specialRating = 95;
      };
      specialAbility = {
        abilityName = "Canvas Shield";
        abilityDescription = "Creates an impenetrable barrier around teammates.";
      };
    },
    {
      id = 11;
      name = "Nelson Mandela";
      country = "South Africa";
      countryFlag = "🇿🇦";
      bio = "Legendary leader and symbol of peace.";
      stats = {
        speed = 75;
        strength = 70;
        stealth = 60;
        specialRating = 100;
      };
      specialAbility = {
        abilityName = "Reconciliation Aura";
        abilityDescription = "Disarms enemies and reduces their aggression level.";
      };
    },
    {
      id = 12;
      name = "Amelia Earhart";
      country = "United States";
      countryFlag = "🇺🇸";
      bio = "Pioneering aviator, renowned for her unwavering courage.";
      stats = {
        speed = 95;
        strength = 60;
        stealth = 70;
        specialRating = 85;
      };
      specialAbility = {
        abilityName = "Sonic Flight";
        abilityDescription = "Moves at double speed for a limited time.";
      };
    },
  ];

  let leaderboardData = [
    {
      playerName = "Player 1";
      characterId = 1;
      rank = 1;
      kills = 28;
      wins = 10;
      gamesPlayed = 20;
    },
    {
      playerName = "Player 2";
      characterId = 2;
      rank = 2;
      kills = 22;
      wins = 8;
      gamesPlayed = 18;
    },
    {
      playerName = "Player 3";
      characterId = 3;
      rank = 3;
      kills = 18;
      wins = 7;
      gamesPlayed = 15;
    },
    {
      playerName = "Player 4";
      characterId = 4;
      rank = 4;
      kills = 15;
      wins = 6;
      gamesPlayed = 12;
    },
    {
      playerName = "Player 5";
      characterId = 5;
      rank = 5;
      kills = 12;
      wins = 5;
      gamesPlayed = 10;
    },
    {
      playerName = "Player 6";
      characterId = 6;
      rank = 6;
      kills = 8;
      wins = 4;
      gamesPlayed = 8;
    },
    {
      playerName = "Player 7";
      characterId = 7;
      rank = 7;
      kills = 6;
      wins = 3;
      gamesPlayed = 6;
    },
    {
      playerName = "Player 8";
      characterId = 8;
      rank = 8;
      kills = 4;
      wins = 2;
      gamesPlayed = 4;
    },
    {
      playerName = "Player 9";
      characterId = 9;
      rank = 9;
      kills = 2;
      wins = 1;
      gamesPlayed = 2;
    },
    {
      playerName = "Player 10";
      characterId = 10;
      rank = 10;
      kills = 1;
      wins = 1;
      gamesPlayed = 1;
    },
  ];

  public query ({ caller }) func getAllCharacters() : async [Character] {
    characters;
  };

  public query ({ caller }) func getCharacterById(id : Nat) : async ?Character {
    characters.find(func(char) { char.id == id });
  };

  public query ({ caller }) func getLeaderboard() : async [PlayerRanking] {
    leaderboardData.sort(PlayerRanking.compareByWins);
  };
};
