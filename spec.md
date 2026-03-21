# Celebrity Battle Royale

## Current State
New project. No existing application code.

## Requested Changes (Diff)

### Add
- Game lobby/home screen with battle royale theme
- Character selection/roster screen showcasing ~12 celebrity-inspired fictional characters from different countries
- Each character has: name, country, flag emoji, bio, stats (speed, strength, stealth, special), and unique special ability with name + description
- Character detail view with full stats panel and skill description
- Game mode selection screen (Solo, Duo, Squad)
- Leaderboard/ranking screen with fictional player rankings
- Smooth navigation between all screens
- Mobile-friendly responsive design

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend (Motoko)
- Store character roster data: id, name, country, flag, bio, stats, special ability
- Store leaderboard entries: playerName, character, rank, kills, wins
- Query functions: getCharacters, getCharacter(id), getLeaderboard
- No authentication required (public read)

### Frontend (React + TypeScript)
- Screens: Lobby, CharacterRoster, CharacterDetail, GameModeSelect, Leaderboard
- React Router for navigation between screens
- Game-like UI with dark theme, amber/gold accents, sci-fi HUD motifs
- Character cards with flag badge, stats bars, special ability info
- Game mode cards (Solo, Duo, Squad) with descriptions
- Leaderboard table with rank, player name, character, kills, wins
- Sample fictional celebrity characters: Brazilian footballer, Korean pop star, Nigerian musician, US basketball player, Japanese martial artist, French fashion icon, Indian Bollywood star, Jamaican sprinter, Mexican wrestler, Australian surfer, Egyptian pharaoh-warrior, Russian chess master
