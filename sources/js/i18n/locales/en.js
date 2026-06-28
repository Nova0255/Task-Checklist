// --- sources/js/i18n/locales/en.js ---
/** Canonical locale and source of truth for all English wording. `ui` is the full key set
 * every other locale falls back to; tasks/cycles/moreInfo content is keyed here too
 * (tasks.json / cycles.json hold only structure — id, icon, ref, etc.).
 *
 * Placeholders: tokens like {name}, {timer}, {minutes}, {time}, {version} are
 * filled at runtime — keep them verbatim in translations. Strings using &nbsp;
 * are injected as HTML; plain entities are fine there but not in aria/title text.
 *
 * Conventions: an empty string ("") means "not translated yet" and falls back to
 * en.js / the source data, so partial locales are safe. A locale only appears in the
 * language switcher once its meta has `ready: true` (en is always available).
 */
import { factionIcon } from "../../functions.js";

// English "Base of Operations" label + tooltip — single-sourced into the ui dict (baseOfOperations.*) and the factions blurb
const BASE_OF_OPS_LABEL = "Base of Operations";
const BASE_OF_OPS_TOOLTIP = "Orbiter, Drifter's Camp, or Backroom";
const baseOfOpsSpan = `<span class="tooltip" title="${BASE_OF_OPS_TOOLTIP}">${BASE_OF_OPS_LABEL}</span>`;

// shared faction-syndicate blurb (used by the daily syndicate moreInfo entries)
const factions = `<p>The Faction Syndicates are
                 ${factionIcon("FactionSigilRebels.png")}Steel Meridian,
                 ${factionIcon("FactionSigilJudge.png")}Arbiters of Hexis,
                 ${factionIcon("FactionSigilOracle.png")}Cephalon Suda,
                 ${factionIcon("FactionSigilBusiness.png")}The Perrin Sequence,
                 ${factionIcon("FactionSigilAssassins.png")}Red Veil,
                 and ${factionIcon("FactionSigilChurch.png")}New Loka.</p>
                 <p>Pledge your loyalty to a faction syndicate at the Syndicates console in your ${baseOfOpsSpan}.</p>`;

export default {
    meta: { code: "en", label: "English", htmlLang: "en" },

    ui: {
        "document.title": "Warframe Task Checklist",
        "app.title": "Warframe Task Checklist",
        "app.description": "Track your daily, weekly, and other Warframe tasks.",

        // aria-labels
        "aria.toggleTheme": "Toggle theme",
        "aria.openMenu": "Open menu",
        "aria.closeError": "Close error message",
        "aria.closeMenu": "Close menu",
        "aria.closeSchedule": "Close schedule",
        "aria.closeMoreInfo": "Close more info",
        "aria.selectLanguage": "Select language",

        // language switcher
        "lang.helpTranslate": "Help translate on GitHub",

        // error display banner
        "error.copy": "Copy",
        "error.copied": "Copied!",
        "error.failed": "Failed",

        // task sections
        "section.daily": "Daily Tasks",
        "section.weekly": "Weekly Tasks",
        "section.other": "Other Tasks",
        "section.hide": "Hide Section",

        // reset / countdown timers ({timer} is the highlighted countdown span)
        "countdown.resetEllipsis": "(Resets ...)",
        "countdown.loading": "(Loading...)",
        "countdown.resetsInTimer": "(Resets in {timer})",
        "countdown.availableForTimer": "(Available for {timer})",
        "countdown.availableInTimer": "(Available in {timer})",
        "countdown.dailyFallback": "(Resets 00:00 UTC)",
        "countdown.weeklyFallback": "(Resets Mon 00:00 UTC)",

        // save status
        "save.saved": "Saved!",
        "save.loading": "Loading...",
        "save.storageNotice": "Your progress is saved locally.",
        "save.lastSaved": "Last saved: {time}",
        "save.never": "Never",

        "reminder": "*Remember, you don't have to do everything! Prioritize tasks based on your current goals and progress.*",

        // footer
        "footer.appVersion": "App Version",
        "footer.warframeVersion": "Warframe Version {version}",
        "footer.license": "License (GPLv3)",
        "footer.disclaimer": "This is an unofficial fan-made tool. Warframe and all related assets are the intellectual property of Digital Extremes Ltd. This project is not affiliated with, endorsed by, or sponsored by Digital Extremes Ltd.",

        // options menu + reset confirmation buttons
        "menu.options": "Options",
        "menu.resetDaily": "Reset Daily Checks",
        "menu.resetWeekly": "Reset Weekly Checks",
        "menu.resetAll": "Reset All Checks",
        "menu.unhideAll": "Unhide All Tasks",
        "menu.confirm": "Are you Sure?",

        // cycle schedule dialog
        "schedule.for": "Schedule for",
        "schedule.date": "Date",
        "schedule.now": "Now",
        "schedule.cycleRepeats": "(Cycle Repeats)",

        // info line (labels are icon tooltips; buttons use &nbsp; to avoid wrapping)
        "info.location": "Location",
        "info.npc": "NPC",
        "info.terminal": "Terminal",
        "info.requirements": "Requirements",
        "info.info": "Info",
        "info.showSchedule": "Show&nbsp;Schedule",
        "info.moreInfo": "More&nbsp;Info",

        // current-cycle prefixes (rendered as HTML; &nbsp; keeps them on one line)
        "cycle.thisWeek": "This&nbsp;Week",
        "cycle.today": "Today",
        "cycle.currentCycle": "Current&nbsp;Cycle",
        "cycle.nextCycle": "Next&nbsp;Cycle",

        "baseOfOperations.label": BASE_OF_OPS_LABEL,
        "baseOfOperations.tooltip": BASE_OF_OPS_TOOLTIP,

        // desktop notifications + permission prompts
        "notif.toggleFor": "Toggle notifications for {name}",
        "notif.hideTask": "Hide task: {name}",
        "notif.leavingSoonTitle": "{name} Leaving Soon!",
        "notif.leavingSoonBody": "Approximately {minutes} minutes remaining.",
        "notif.resetTitle": "{name} has reset!",
        "notif.resetBody": "Vendor stock may have updated.",
        "notif.noSupport": "This browser does not support desktop notifications.",
        "notif.denied": "Notification permission was denied. You can enable it in your browser settings.",
        "notif.deniedPersist": "Notification permission has been denied. Please enable it in your browser settings if you wish to receive notifications.",

        // save/load/startup errors
        "errors.saveFailed": "Could not save progress.",
        "errors.saveFailedQuota": "Could not save progress. Browser storage might be full.",
        "errors.loadFailed": "Failed to load saved progress. Data might be corrupted.",
        "errors.themeSaveFailed": "Could not save theme preference.",
        "errors.critical": "A critical error occurred during application startup. Please check the console.",
    },

    // canonical English for every task, keyed by task id (tasks.json holds only structure).
    // other locales override per field, falling back here then to the key (see localizeTasks)
    tasks: {
        // --- daily ---
        daily_login: { text: "Log in: Collect the daily login reward." },
        daily_craft_forma: { text: "Crafting (Forma): Start building a new Forma (and collect finished ones).", location: "Base of Operations", terminal: "Foundry" },
        daily_craft_other: { text: "Crafting (Other): Craft other daily resources/items using reusable blueprints (check Foundry/companion app).", location: "Base of Operations", terminal: "Foundry" },
        daily_first_win_bonus: { text: "Daily First Win Bonus: Get double base credit reward on your first mission.", location: "Base of Operations", terminal: "Navigation" },
        daily_syndicate_gain: { text: "Faction Syndicates: Gain daily standing cap with your pledged Syndicate(s).", prereq: "Mastery Rank 3", info: "Gain affinity in any mission to increase faction standing" },
        daily_syndicate_spend: { text: "Faction Syndicates: If maxed on standing, spend it (Relic packs, Vosfor packs, etc.).", location: "Base of Operations/Any Relay", terminal: "Syndicates", prereq: "Mastery Rank 3" },
        daily_world_syndicate_parent: { text: "World Syndicates (Standing)" },
        daily_world_syndicate_simaris: { text: "Cephalon Simaris", location: "Any Relay" },
        daily_world_syndicate_ostron: { text: "Ostron", location: "Cetus, Earth", prereq: "Saya's Vigil" },
        daily_world_syndicate_quills: { text: "The Quills", location: "Cetus, Earth", prereq: "The War Within" },
        daily_world_syndicate_solaris: { text: "Solaris United", location: "Fortuna, Venus", prereq: "Vox Solaris (Quest)" },
        daily_world_syndicate_vox: { text: "Vox Solaris", location: "Fortuna, Venus", prereq: "The War Within" },
        daily_world_syndicate_ventkids: { text: "Ventkids", location: "Fortuna, Venus", prereq: "Vox Solaris (Quest)" },
        daily_world_syndicate_entrati: { text: "Entrati", location: "Necralisk, Deimos", prereq: "Heart of Deimos" },
        daily_world_syndicate_necraloid: { text: "Necraloid", location: "Necralisk, Deimos", prereq: "The War Within" },
        daily_world_syndicate_holdfasts: { text: "The Holdfasts", location: "Chrysalith, Zariman", prereq: "Angels of the Zariman" },
        daily_world_syndicate_cavia: { text: "Cavia", location: "Sanctum Anatomica, Deimos", prereq: "Whispers in the Walls" },
        daily_world_syndicate_hex: { text: "The Hex", location: "Höllvania Central Mall", prereq: "The Hex (Quest)" },
        daily_sortie: { text: "Sortie: Complete the 3 daily Sortie missions.", location: "Base of Operations", terminal: "Navigation", prereq: "The War Within" },
        daily_focus: { text: "Focus: Max out daily Focus gain (e.g., via Sanctuary Onslaught).", prereq: "The Second Dream" },
        daily_steel_path: { text: "Steel Path Incursions: Complete daily Steel Path missions for Steel Essence.", prereq: "Steel Path unlocked" },
        daily_kim_parent: { text: "KIM: complete daily chats with protoframes", location: "Base of Operations", terminal: "POM-2 PC" },
        daily_kim_hex_parent: { text: "The Hex", prereq: "The Hex (Quest)" },
        daily_kim_arthur: { text: "Broadsword (Arthur)" },
        daily_kim_eleanor: { text: "Salem (Eleanor)" },
        daily_kim_lettie: { text: "Belladona ~{@ (Lettie)" },
        daily_kim_amir: { text: "H16h V0l7463 (Amir)" },
        daily_kim_aoi: { text: "xX GLIMMER Xx (Aoi)" },
        daily_kim_quincy: { text: "Soldja1Shot1kil (Quincy)" },
        daily_kim_roundtable_parent: { text: "The Roundtable", prereq: "The Hex (Quest) Finale" },
        daily_kim_flare: { text: "Liminus_Star (Flare)", prereq: "Rank 4 The Hex" },
        daily_kim_minerva_velimir: { text: "MomToxicated & PapaPolar (Minerva & Velimir)", prereq: "Rank 5 The Hex" },
        daily_kim_kaya: { text: "KOLTrial_5115 (Kaya)", prereq: "Rank 5 The Hex" },
        daily_kim_devils_triad_parent: { text: "The Devil's Triad", prereq: "The Old Peace" },
        daily_kim_marie: { text: "Marie" },
        daily_kim_roathe: { text: "Roathe" },
        daily_kim_lyon: { text: "Lyon", prereq: "\"Liked\" by Marie" },
        daily_vendors: { text: "Vendors" },
        daily_acrithis: { text: "Acrithis: Check daily Arcane and Captura offering.", location: "Duviri/Dormizone", npc: "Acrithis", prereq: "Drifter Intrinsics: Opportunity Rank 9 (for Arcanes)" },
        daily_ticker_crew: { text: "Ticker: Check available railjack crew to hire.", location: "Fortuna, Venus", npc: "Ticker", prereq: "Rising Tide & Command Intrinsics 1" },
        daily_marie: { text: "Marie: Purchase Tektolyst mods, arcanes, and Perita/Descendia resources.", location: "La Cathédrale (Sanctum Anatomica, Deimos)", npc: "Marie", prereq: "The Old Peace" },
        // --- weekly ---
        weekly_nightwave_complete: { text: "Nightwave: Complete relevant weekly Nightwave missions." },
        weekly_nightwave_spend: { text: "Nightwave (Spend): Spend Nightwave credits if needed (Aura mods, Catalysts/Reactors, etc.)." },
        weekly_ayatan: { text: "Ayatan Treasure Hunt: Complete Maroo's weekly mission for an Ayatan Sculpture", location: "Maroo's Bazaar, Mars", npc: "Maroo" },
        weekly_clem: { text: "Help Clem: Help Clem with his weekly survival, or he will die.", location: "Any Relay", npc: "Darvo", prereq: "A Man of Few Words" },
        weekly_kahl_garrison: { text: "Break Narmer: Complete Kahl's weekly mission for Stock.", location: "Drifter's Camp, Earth", npc: "Kahl", prereq: "Veilbreaker" },
        weekly_archon_hunt: { text: "Archon Hunt: Complete the weekly Archon Hunt for a guaranteed Archon Shard.", location: "Base of Operations", terminal: "Navigation", prereq: "The New War" },
        weekly_duviri_circuit: { text: "Duviri Circuit (Normal): Check weekly Warframe options & run Circuit if desired.", location: "Base of Operations/Dormizone", terminal: "Navigation", prereq: "The Duviri Paradox" },
        weekly_duviri_circuit_sp: { text: "Duviri Circuit (Steel Path): Check weekly Incarnon Adapters & run Circuit if desired.", location: "Base of Operations/Dormizone", terminal: "Navigation", prereq: "Steel Path unlocked & The Duviri Paradox" },
        weekly_search_pulses: { text: "Search Pulses: Use 5 weekly search pulses on Netracells and Archimedeas." },
        weekly_netracells: { text: "Netracells: Complete up to 5 weekly Netracell missions for Archon Shard chances.", location: "Sanctum Anatomica, Deimos", npc: "Tagfer", prereq: "Whispers in the Walls", info: "Costs 1 Search Pulse per successful mission" },
        weekly_eda: { text: "Elite Deep Archimedea: Attempt weekly Elite Deep Archimedea for high Archon Shard chances (very endgame).", location: "Sanctum Anatomica, Deimos", npc: "Necraloid", prereq: "Rank 5 Cavia", info: "Costs 2 Search Pulses to unlock for the week" },
        weekly_eta: { text: "Elite Temporal Archimedea: Attempt weekly Elite Temporal Archimedea for high Archon Shard chances (very endgame).", location: "Höllvania Central Mall", npc: "Kaya Velasco", prereq: "Rank 5 The Hex", info: "Costs 2 Search Pulses to unlock for the week" },
        weekly_calendar: { text: "1999 Calendar: Complete weekly Calendar tasks.", location: "Base of Operations", terminal: "POM-2 PC", prereq: "The Hex" },
        weekly_invigorations: { text: "Helminth: Use weekly Invigorations.", location: "Base of Operations", npc: "Helminth", prereq: "Rank 5 Entrati" },
        weekly_descendia: { text: "The Descendia (Normal): Weekly Tower gamemode for various resources.", location: "Dark Refractory (Base of Operations)", terminal: "Navigation" },
        weekly_descendia_sp: { text: "The Descendia (Steel Path): Weekly Tower gamemode for various resources.", location: "Dark Refractory (Base of Operations)", terminal: "Navigation" },
        weekly_clan_initiative: { text: "Clan Weekly Initiatives: Earn rewards by playing with clan members.", location: "Any Mission*", terminal: "Menu &#x1F782; Communication &#x1F782; Clan", prereq: "Membership in a Clan" },
        weekly_vendors: { text: "Vendors" },
        weekly_iron_wake: { text: "Paladino: Trade Riven Slivers.", location: "Iron Wake, Earth", npc: "Paladino", prereq: "The Chains of Harrow" },
        weekly_yonta: { text: "Archimedean Yonta: Buy weekly Kuva with Voidplumes.", location: "Chrysalith, Zariman", npc: "Yonta", prereq: "Angels of the Zariman" },
        weekly_acrithis: { text: "Acrithis: Check wares and spend Pathos Clamps if desired (Catalysts/Reactors recommended if needed). Buy Kuva with Scuttler Husks.", location: "Duviri/Dormizone", npc: "Acrithis", prereq: "The Duviri Paradox" },
        weekly_teshin: { text: "Teshin (Steel Path): Check Teshin's Steel Essence shop (especially for Umbra Forma rotation every 8 weeks).", location: "Any Relay", npc: "Teshin", prereq: "Steel Path unlocked" },
        weekly_bird3: { text: "Bird 3: Buy the weekly Archon Shard for 30k Cavia Standing.", location: "Sanctum Anatomica, Deimos", npc: "Bird 3", prereq: "Rank 5 Cavia" },
        weekly_kaya: { text: "Kaya: Trade Pix Chips for Arcanes.", location: "Höllvania Central Mall", npc: "Kaya Velasco", prereq: "Elite Temporal Archimedea" },
        weekly_nightcap: { text: "Nightcap: Trade Fergolyte for Kuva and Ayatan Sculpture.", location: "Fortuna, Venus", npc: "Nightcap", prereq: "The New War" },
        weekly_zorba: { text: "Aspirant Zorba: Trade Atramentum for Kuva.", location: "Any Relay", npc: "Aspirant Zorba", prereq: "The Chains of Harrow" },
        weekly_hunhow: { text: "Hunhow: Trade Emerald &amp; Crimson Talents for Kuva.", location: "Pontis Tower, Uranus", npc: "Hunhow", prereq: "Jade Shadows: Constellations" },
        // --- other ---
        other_baro: { text: "Baro Ki'Teer: Check Baro Ki'Teer's inventory and purchase desired items with Ducats (trade Prime parts for Ducats).", location: "Relay with Symbol", npc: "Baro Ki'Teer" },
        other_grandmother_tokens: { text: "Mend the Family: Purchase Family Tokens from Grandmother.", location: "Necralisk, Deimos", prereq: "Heart of Deimos" },
        other_yonta_voidplumes: { text: "Trade for Voidplumes", location: "Chrysalith, Zariman", npc: "Yonta", prereq: "Angels of the Zariman" },
        other_loid_voca: { text: "Trade for Voca", location: "Sanctum Anatomica, Deimos", npc: "Loid", prereq: "Whispers in the Walls" },
        other_glast: { text: "Tenet Weapons: Check Ergo Glast's shop for good valence bonuses.", location: "Any Relay", npc: "Ergo Glast", prereq: "The Archwing + Mastery Rank 14" },
        other_eleanor: { text: "Coda Weapons: Check Eleanor's shop for good valence bonuses.", location: "Höllvania Central Mall", npc: "Eleanor Nightingale", prereq: "The Hex (Quest)" },
    },
    
    moreInfo: {
        daily_first_win_bonus: `<p>Your first completed mission after the daily reset gives double <em>base credit rewards</em>. This only applies to the end-of-mission bonus, and does <strong>not</strong> apply to credits picked up in the mission.</p>
        <p>It also does <strong>not</strong> apply to the following mission types and locations:</p>
        <ul>
            <li><strong>The Index</strong></li>
            <li>Open Worlds (including Profit Taker)</li>
            <li>Zariman</li>
            <li>Höllvania (including Techrot safes)</li>
        </ul>
        <p>Completing any of these missions will consume the bonus without awarding extra credits.</p>
        <p>The bonus <strong>does</strong> stack with Credit Boosters, Credit Blessings, and double Credit events. Travelling to a relay or other non-mission area does <strong>not</strong> consume the bonus.</p>
        <p>Some good missions to use it on include:</p>
        <table>
            <thead><tr>
                <th>Name</th>
                <th>Type</th>
                <th>Base Credits</th>
                <th>Enemy Level</th>
            </tr></thead>
            <tbody>
                <tr>
                    <td>Tikal, Earth</td>
                    <td>Dark Sector Excavation</td>
                    <td>13,500</td>
                    <td>6 - 16</td>
                </tr>
                <tr>
                    <td>Gabii, Ceres</td>
                    <td>Dark Sector Survival</td>
                    <td>22,400</td>
                    <td>15 - 25</td>
                </tr>
                <tr>
                    <td>Bendar Cluster, Earth Proxima</td>
                    <td>Railjack Skirmish</td>
                    <td>48,800</td>
                    <td>29 - 36</td>
                </tr>
                <tr>
                    <td>Sabmir Cloud, Veil Proxima</td>
                    <td>Railjack Spy</td>
                    <td>156,600</td>
                    <td>56 - 60</td>
                </tr>
            </tbody>
        </table>
        <p>See <a href="https://wiki.warframe.com/w/Daily_Tribute#Daily_First_Win_Bonus">Daily First Win Bonus</a>, <a href="https://wiki.warframe.com/w/Dark_Sectors">Dark Sectors</a>, and <a href="https://wiki.warframe.com/w/Mission#Locations">Mission</a> on the wiki for more details.</p>
        <p>(There's currently a visual bug where the bonus credits don't appear on the mission completion screen. They <em>are</em> still added to your account though.)</p>`,

        daily_syndicate_gain: factions,
        daily_syndicate_spend: factions,

        weekly_clan_initiative: `<p>Play in a squad with other members of your Clan to earn bonus resources for your Clan Vault. The bonus resources also contribute to your personal rewards track for the week. Progress is based on the amount of resources collected in missions with your clan members.</p>
        <p>Each week, a random planet will reward double bonus Vault resources (and double reward track progress) for missions played there.</p>
        <p>Check the current boosted planet and track your reward progress in the Clan menu.</p>
        <p><strong>Note:</strong> You can use the "Clan Only" matchmaking option to join squads with your Clan or Alliance members, but playing with Alliance members does <em>not</em> give bonus Vault resources or reward progress.</p>
        <p>* Descendia missions do not contribute to Clan Weekly Initiatives.</p>`
    },

    // Cycle text is keyed: cycles.json stores nameKey/textKey, the English strings
    // live here (canonical). Other locales override these keys; blank/missing keys
    // fall back to en. Keys are reused across cycles where the text is identical.
    cycles: {
        // column headers
        "item": "Item",
        "items": "Items",
        "tileset": "Tileset",
        "mission": "Mission",
        "boss": "Boss",
        "season": "Season",
        "increased_spawns": "Increased Spawns",
        "location": "Location",
        "coda_weapons": "Coda Weapons",

        // weekly_ayatan items
        "ayatan_sah": "Ayatan Sah Sculpture",
        "ayatan_ayr": "Ayatan Ayr Sculpture",
        "ayatan_orta": "Ayatan Orta Sculpture",
        "ayatan_vaya": "Ayatan Vaya Sculpture",
        "ayatan_piv": "Ayatan Piv Sculpture",
        "ayatan_valana": "Ayatan Valana Sculpture",

        // tilesets (shared across cycles)
        "orokin_derelict": "Orokin Derelict (Deimos)",
        "orokin_tower": "Orokin Tower (Void)",
        "spaceport_orb_vallis": "Spaceport (Orb Vallis, Venus)",
        "grineer_forest_earth": "Grineer Forest (Earth)",
        "grineer_settlement_mars": "Grineer Settlement (Mars)",
        "corpus_gas_city_jupiter": "Corpus Gas City (Jupiter)",
        "murex": "Murex",

        // weekly_kahl_garrison missions
        "sneaky_sabotage": "Sneaky Sabotage",
        "junk_run": "Junk Run",
        "prison_break": "Prison Break",

        // archon shards (shared by weekly_archon_hunt + weekly_bird3)
        "archon_shard_azure": "Azure Archon Shard",
        "archon_shard_crimson": "Crimson Archon Shard",
        "archon_shard_amber": "Amber Archon Shard",

        // weekly_archon_hunt bosses (keep emoji, translate the name)
        "archon_boreal": "🦉 Archon Boreal",
        "archon_amar": "🐺 Archon Amar",
        "archon_nira": "🐍 Archon Nira",

        // weekly_duviri_circuit (normal) warframe rotation
        "circuit_normal_week_1": "Blueprints for Excalibur, Trinity, or Ember",
        "circuit_normal_week_2": "Blueprints for Loki, Mag, or Rhino",
        "circuit_normal_week_3": "Blueprints for Ash, Frost, or Nyx",
        "circuit_normal_week_4": "Blueprints for Saryn, Vauban, or Nova",
        "circuit_normal_week_5": "Blueprints for Nekros, Valkyr, or Oberon",
        "circuit_normal_week_6": "Blueprints for Hydroid, Mirage, or Limbo",
        "circuit_normal_week_7": "Blueprints for Mesa, Chroma, or Atlas",
        "circuit_normal_week_8": "Blueprints for Ivara, Inaros, or Titania",
        "circuit_normal_week_9": "Blueprints for Nidus, Octavia, or Harrow",
        "circuit_normal_week_10": "Blueprints for Gara, Khora, or Revenant",
        "circuit_normal_week_11": "Blueprints for Garuda, Baruuk, or Hildryn",

        // weekly_duviri_circuit_sp incarnon rotation
        "circuit_sp_week_1": "Incarnon Adapters for Braton, Kunai, Lato, Paris, and Skana",
        "circuit_sp_week_2": "Incarnon Adapters for Angstrum, Anku, Boar, Gammacor, and Gorgon",
        "circuit_sp_week_3": "Incarnon Adapters for Bo, Furax, Furis, Latron, and Strun",
        "circuit_sp_week_4": "Incarnon Adapters for Boltor, Bronco, Ceramic Dagger, Lex, and Magistar",
        "circuit_sp_week_5": "Incarnon Adapters for Atomos, Dual Ichor, Dual Toxocyst, Miter, and Torid",
        "circuit_sp_week_6": "Incarnon Adapters for Ack & Brunt, Burston, Nami Solo, Soma, and Vasto",
        "circuit_sp_week_7": "Incarnon Adapters for Despair, Dread, Hate, Sibear, and Zylok",
        "circuit_sp_week_8": "Incarnon Adapters for Cestra, Dera, Okina, Sicarus, and Sybaris",
        "circuit_sp_week_9": "Incarnon Adapters for Ballistica, Destreza, Obex, Stug, and Vectis",

        // weekly_calendar seasons
        "season_winter": "Winter",
        "season_spring": "Spring",
        "season_summer": "Summer",
        "season_autumn": "Autumn",

        // weekly_calendar increased spawns (keep emoji, translate the eximus type)
        "eximus_arctic": "❄️ Arctic Eximus",
        "eximus_jade_light": "🟢 Jade Light Eximus",
        "eximus_arson": "🔥 Arson Eximus",
        "eximus_energy_leech": "🧲 Energy Leech Eximus",

        // weekly_teshin items
        "umbra_forma_blueprint": "Umbra Forma Blueprint",
        "kuva_50000": "50,000 Kuva",
        "riven_kitgun": "Kitgun Riven Mod",
        "forma_built_3x": "3x Built Forma",
        "riven_zaw": "Zaw Riven Mod",
        "endo_30000": "30,000 Endo",
        "riven_rifle": "Rifle Riven Mod",
        "riven_shotgun": "Shotgun Riven Mod",

        // other_baro relay locations
        "relay_strata_earth": "Strata Relay, Earth",
        "relay_larunda_mercury": "Larunda Relay, Mercury",
        "relay_kronia_saturn": "Kronia Relay, Saturn",
        "relay_orcus_pluto": "Orcus Relay, Pluto (MR 8+)",

        // other_eleanor coda weapon batches
        "coda_weapons_batch_a": "Hema, Sporothrix, Catabolyst, Pox, Dual Torxica, Mire, and Motovore",
        "coda_weapons_batch_b": "Bassocyst, Bubonico, Synapse, Tysis, Caustacyst, Hirudo, and Pathocyst",
    },
};
