// --- sources/js/i18n/locales/zh-hans.js ---
// 简体中文 — translation scaffold. Every value is empty ("") and falls back to
// en.js / the source data until filled in (see ../i18n.js). Fill strings in place;
// leaving a value "" keeps the English default, so partial translations are safe.
//
// 翻译模板。每个值均为空 ("")，在填写之前会回退到 en.js / 源数据
//（见 ../i18n.js）。请就地填写字符串；将值留空 "" 会保留英文默认值，
// 因此部分翻译也是安全的。

export default {
    meta: { code: "zh-hans", label: "简体中文", htmlLang: "zh-Hans" },

    ui: {
        "document.title": "",
        "app.title": "",
        "app.description": "",

        // aria-labels
        "aria.toggleTheme": "",
        "aria.openMenu": "",
        "aria.closeError": "",
        "aria.closeMenu": "",
        "aria.closeSchedule": "",
        "aria.closeMoreInfo": "",
        "aria.selectLanguage": "",

        // language switcher
        "lang.helpTranslate": "",

        // error display banner
        "error.copy": "",
        "error.copied": "",
        "error.failed": "",

        // task sections
        "section.daily": "",
        "section.weekly": "",
        "section.other": "",
        "section.hide": "",

        // reset / countdown timers ({timer} is the highlighted countdown span)
        "countdown.resetEllipsis": "",
        "countdown.loading": "",
        "countdown.resetsInTimer": "",
        "countdown.availableForTimer": "",
        "countdown.availableInTimer": "",
        "countdown.dailyFallback": "",
        "countdown.weeklyFallback": "",

        // save status
        "save.saved": "",
        "save.loading": "",
        "save.storageNotice": "",
        "save.lastSaved": "",
        "save.never": "",

        "reminder": "",

        // footer
        "footer.appVersion": "",
        "footer.warframeVersion": "",
        "footer.license": "",
        "footer.disclaimer": "",

        // options menu + reset confirmation buttons
        "menu.options": "",
        "menu.resetDaily": "",
        "menu.resetWeekly": "",
        "menu.resetAll": "",
        "menu.unhideAll": "",
        "menu.confirm": "",

        // cycle schedule dialog
        "schedule.for": "",
        "schedule.date": "",
        "schedule.now": "",
        "schedule.cycleRepeats": "",

        // info line (labels are icon tooltips; buttons use &nbsp; to avoid wrapping)
        "info.location": "",
        "info.npc": "",
        "info.terminal": "",
        "info.requirements": "",
        "info.info": "",
        "info.showSchedule": "",
        "info.moreInfo": "",

        // current-cycle prefixes (rendered as HTML; &nbsp; keeps them on one line)
        "cycle.thisWeek": "",
        "cycle.today": "",
        "cycle.currentCycle": "",
        "cycle.nextCycle": "",

        "baseOfOperations.label": "",
        "baseOfOperations.tooltip": "",

        // desktop notifications + permission prompts
        "notif.toggleFor": "",
        "notif.hideTask": "",
        "notif.leavingSoonTitle": "",
        "notif.leavingSoonBody": "",
        "notif.resetTitle": "",
        "notif.resetBody": "",
        "notif.noSupport": "",
        "notif.denied": "",
        "notif.deniedPersist": "",

        // save/load/startup errors
        "errors.saveFailed": "",
        "errors.saveFailedQuota": "",
        "errors.loadFailed": "",
        "errors.themeSaveFailed": "",
        "errors.critical": "",
    },

    tasks: {
        // --- daily ---
        daily_login: { text: "" },
        daily_craft_forma: { text: "", location: "", terminal: "" },
        daily_craft_other: { text: "", location: "", terminal: "" },
        daily_first_win_bonus: { text: "", location: "", terminal: "" },
        daily_syndicate_gain: { text: "", prereq: "", info: "" },
        daily_syndicate_spend: { text: "", location: "", terminal: "", prereq: "" },
        daily_world_syndicate_parent: { text: "" },
        daily_world_syndicate_simaris: { text: "", location: "" },
        daily_world_syndicate_ostron: { text: "", location: "", prereq: "" },
        daily_world_syndicate_quills: { text: "", location: "", prereq: "" },
        daily_world_syndicate_solaris: { text: "", location: "", prereq: "" },
        daily_world_syndicate_vox: { text: "", location: "", prereq: "" },
        daily_world_syndicate_ventkids: { text: "", location: "", prereq: "" },
        daily_world_syndicate_entrati: { text: "", location: "", prereq: "" },
        daily_world_syndicate_necraloid: { text: "", location: "", prereq: "" },
        daily_world_syndicate_holdfasts: { text: "", location: "", prereq: "" },
        daily_world_syndicate_cavia: { text: "", location: "", prereq: "" },
        daily_world_syndicate_hex: { text: "", location: "", prereq: "" },
        daily_sortie: { text: "", location: "", terminal: "", prereq: "" },
        daily_focus: { text: "", prereq: "" },
        daily_steel_path: { text: "", prereq: "" },
        daily_kim_parent: { text: "", location: "", terminal: "" },
        daily_kim_hex_parent: { text: "", prereq: "" },
        daily_kim_arthur: { text: "" },
        daily_kim_eleanor: { text: "" },
        daily_kim_lettie: { text: "" },
        daily_kim_amir: { text: "" },
        daily_kim_aoi: { text: "" },
        daily_kim_quincy: { text: "" },
        daily_kim_roundtable_parent: { text: "", prereq: "" },
        daily_kim_flare: { text: "", prereq: "" },
        daily_kim_minerva_velimir: { text: "", prereq: "" },
        daily_kim_kaya: { text: "", prereq: "" },
        daily_kim_devils_triad_parent: { text: "", prereq: "" },
        daily_kim_marie: { text: "" },
        daily_kim_roathe: { text: "" },
        daily_kim_lyon: { text: "", prereq: "" },
        daily_vendors: { text: "" },
        daily_acrithis: { text: "", location: "", npc: "", prereq: "" },
        daily_ticker_crew: { text: "", location: "", npc: "", prereq: "" },
        daily_marie: { text: "", location: "", npc: "", prereq: "" },

        // --- weekly ---
        weekly_nightwave_complete: { text: "" },
        weekly_nightwave_spend: { text: "" },
        weekly_ayatan: { text: "", location: "", npc: "" },
        weekly_clem: { text: "", location: "", npc: "", prereq: "" },
        weekly_kahl_garrison: { text: "", location: "", npc: "", prereq: "" },
        weekly_archon_hunt: { text: "", location: "", terminal: "", prereq: "" },
        weekly_duviri_circuit: { text: "", location: "", terminal: "", prereq: "" },
        weekly_duviri_circuit_sp: { text: "", location: "", terminal: "", prereq: "" },
        weekly_search_pulses: { text: "" },
        weekly_netracells: { text: "", location: "", npc: "", prereq: "", info: "" },
        weekly_eda: { text: "", location: "", npc: "", prereq: "", info: "" },
        weekly_eta: { text: "", location: "", npc: "", prereq: "", info: "" },
        weekly_clan_initiative: { text: "", location: "", terminal: "", prereq: "" },
        weekly_calendar: { text: "", location: "", terminal: "", prereq: "" },
        weekly_invigorations: { text: "", location: "", npc: "", prereq: "" },
        weekly_descendia: { text: "", location: "", terminal: "" },
        weekly_descendia_sp: { text: "", location: "", terminal: "" },
        weekly_vendors: { text: "" },
        weekly_iron_wake: { text: "", location: "", npc: "", prereq: "" },
        weekly_yonta: { text: "", location: "", npc: "", prereq: "" },
        weekly_acrithis: { text: "", location: "", npc: "", prereq: "" },
        weekly_teshin: { text: "", location: "", npc: "", prereq: "" },
        weekly_bird3: { text: "", location: "", npc: "", prereq: "" },
        weekly_nightcap: { text: "", location: "", npc: "", prereq: "" },
        weekly_zorba: { text: "", location: "", npc: "", prereq: "" },
        weekly_kaya: { text: "", location: "", npc: "", prereq: "" },
        weekly_hunhow: { text: "", location: "", npc: "", prereq: "" },

        // --- other ---
        other_baro: { text: "", location: "", npc: "" },
        other_grandmother_tokens: { text: "", location: "", prereq: "" },
        other_yonta_voidplumes: { text: "", location: "", npc: "", prereq: "" },
        other_loid_voca: { text: "", location: "", npc: "", prereq: "" },
        other_glast: { text: "", location: "", npc: "", prereq: "" },
        other_eleanor: { text: "", location: "", npc: "", prereq: "" },
    },

    cycles: {
        // column headers
        "item": "",
        "items": "",
        "tileset": "",
        "mission": "",
        "boss": "",
        "season": "",
        "increased_spawns": "",
        "location": "",
        "coda_weapons": "",

        // weekly_ayatan items
        "ayatan_sah": "",
        "ayatan_ayr": "",
        "ayatan_orta": "",
        "ayatan_vaya": "",
        "ayatan_piv": "",
        "ayatan_valana": "",

        // tilesets (shared across cycles)
        "orokin_derelict": "",
        "orokin_tower": "",
        "spaceport_orb_vallis": "",
        "grineer_forest_earth": "",
        "grineer_settlement_mars": "",
        "corpus_gas_city_jupiter": "",
        "murex": "",

        // weekly_kahl_garrison missions
        "sneaky_sabotage": "",
        "junk_run": "",
        "prison_break": "",

        // archon shards (weekly_archon_hunt + weekly_bird3)
        "archon_shard_azure": "",
        "archon_shard_crimson": "",
        "archon_shard_amber": "",

        // weekly_archon_hunt bosses (keep emoji, translate the name)
        "archon_boreal": "",
        "archon_amar": "",
        "archon_nira": "",

        // weekly_duviri_circuit (normal)
        "circuit_normal_week_1": "",
        "circuit_normal_week_2": "",
        "circuit_normal_week_3": "",
        "circuit_normal_week_4": "",
        "circuit_normal_week_5": "",
        "circuit_normal_week_6": "",
        "circuit_normal_week_7": "",
        "circuit_normal_week_8": "",
        "circuit_normal_week_9": "",
        "circuit_normal_week_10": "",
        "circuit_normal_week_11": "",

        // weekly_duviri_circuit_sp
        "circuit_sp_week_1": "",
        "circuit_sp_week_2": "",
        "circuit_sp_week_3": "",
        "circuit_sp_week_4": "",
        "circuit_sp_week_5": "",
        "circuit_sp_week_6": "",
        "circuit_sp_week_7": "",
        "circuit_sp_week_8": "",
        "circuit_sp_week_9": "",

        // weekly_calendar seasons
        "season_winter": "",
        "season_spring": "",
        "season_summer": "",
        "season_autumn": "",

        // weekly_calendar increased spawns (keep emoji, translate the eximus type)
        "eximus_arctic": "",
        "eximus_jade_light": "",
        "eximus_arson": "",
        "eximus_energy_leech": "",

        // weekly_teshin items
        "umbra_forma_blueprint": "",
        "kuva_50000": "",
        "riven_kitgun": "",
        "forma_built_3x": "",
        "riven_zaw": "",
        "endo_30000": "",
        "riven_rifle": "",
        "riven_shotgun": "",

        // other_baro relay locations
        "relay_strata_earth": "",
        "relay_larunda_mercury": "",
        "relay_kronia_saturn": "",
        "relay_orcus_pluto": "",

        // other_eleanor coda weapon batches
        "coda_weapons_batch_a": "",
        "coda_weapons_batch_b": "",
    },

    moreInfo: {
        daily_first_win_bonus: "",
        daily_syndicate_gain: "",
        daily_syndicate_spend: "",
        weekly_clan_initiative: "",
    },
};
