import { Sharpness } from "../constants";

// returns list of all skills defined in the Skills object
export const SkillList = () => {
    const keys = Object.keys(Skills);
    let list = new Array(keys.length);
    for (let i = 0; i < keys.length; i++) {
        let skill = Skills[keys[i]];
        list[skill.index] = {skill, level: 0};
    }
    return list;
}

export const Skills = {
    AffinitySliding: {
        index: 0,
        name: "Affinity Sliding",
        levels: 1,
        apply: (level, values) => {
            if (level === 1) {
                values.affinity += 30;
                values.applied.push({
                    name: "Affinity Sliding",
                    level,
                    bonuses: [
                        "+30% Affinity"
                    ]
                });
            }
        }
    },

    Agitator: {
        index: 1,
        name: "Agitator",
        levels: 5,
        apply: (level, values) => {
            if (level > 0 && level <= 5) {
                values.attack += 4 * level;
                values.affinity += 3 * level;
                values.applied.push({
                    name: "Agitator",
                    level,
                    bonuses: [
                        "+" + (4 * level) + " True Attack",
                        "+" + (3 * level) + "% Affinity"
                    ]
                });
            }
        }
    },

    AttackBoost: {
        index: 2,
        name: "Attack Boost",
        levels: 7,
        apply: (level, values) => {
            if (level > 0 && level <= 7) {
                values.attack += 3 * level;
                let applied = {
                    name: "Attack Boost",
                    level,
                    bonuses: [
                        "+" + (3 * level) + " True Attack"
                    ]
                }
                if (level > 3) {
                    values.affinity += 5;
                    applied.bonuses.push("+5% Affinity");
                }
                values.applied.push(applied);
            }
        }
    },

    Bludgeoner: {
        index: 3,
        name: "Bludgeoner",
        levels: 1,
        apply: (level, values) => {
            if (level === 1) {
                let i;
                switch (values.sharpness) {
                    case Sharpness.Red: i = Math.round((values.rawAttack * 0.1578) / values.weaponMultiplier);
                        break;
                    case Sharpness.Orange: i = Math.round((values.rawAttack * 0.1578) / values.weaponMultiplier);
                        break;
                    case Sharpness.Yellow: i = Math.round((values.rawAttack * 0.1315) / values.weaponMultiplier);
                        break;
                    case Sharpness.Green: i = Math.round((values.rawAttack * 0.0789) / values.weaponMultiplier);
                        break;
                    default: i = 0;
                }
                values.attack += i;
                values.applied.push({
                    name: "Bludgeoner",
                    level,
                    bonuses: [
                        "+" + i + " True Attack"
                    ]
                });
            }
        }
    },

    CriticalBoost: {
        index: 4,
        name: "Critical Boost",
        levels: 3,
        apply: (level, values) => {
            if (level > 0 && level <= 3) {
                values.critDamage = 25 + level * 5;
                values.applied.push({
                    name: "Critical Boost",
                    level,
                    bonuses: [
                        "+" + (25 + level * 5) + "% Critical Damage"
                    ]
                });
            }
        }
    },

    CriticalEye: {
        index: 5,
        name: "Critical Eye",
        levels: 7,
        apply: (level, values) => {
            if (level > 0 && level <= 7) {
                let i;
                switch (level) {
                    case 1: i = 3;
                        break;
                    case 2: i = 6;
                        break;
                    case 3: i = 10;
                        break;
                    default: i = 10 + 5 * (level - 3);
                }
                values.affinity += i;
                values.applied.push({
                    name: "Critical Eye",
                    level,
                    bonuses: [
                        "+" + i + "% Affinity"
                    ]
                });
            }
        }
    },

    ElementAttack: {
        index: 6,
        name: "(Element) Attack",
        levels: 5,
        apply: (level, values) => {
            if (level > 0 && level <= 5) {
                let i;
                switch(level) {
                    case 1: i = 30;
                        break;
                    case 2: i = 60;
                        break;
                    default: i = 100;
                }
                if (level === 4) {
                    i += Math.round(values.rawElement * .05);
                }
                if (level === 5) {
                    i += Math.round(values.rawElement * .1);
                }
                values.element += Math.round(i / 10);
                values.applied.push({
                    name: "(Element) Attack",
                    level,
                    bonuses: [
                        "+" + Math.round(i / 10) + " True Element"
                    ]
                });
            }
        }
    },

    Fortify: {
        index: 7,
        name: "Fortify",
        levels: 1,
        apply: (level, values) => {
            if (level === 1) {
                values.attack += Math.round((values.rawAttack * 0.2) / values.weaponMultiplier);
                values.applied.push({
                    name: "Fortify",
                    level,
                    bonuses: [
                        "+" + Math.round((values.rawAttack * 0.2) / values.weaponMultiplier) + " True Attack"
                    ]
                });
            }
        }
    },

    Heroics: {
        index: 8,
        name: "Heroics",
        levels: 5,
        apply: (level, values) => {
            if (level > 0 && level <= 5) {
                let i;
                if (level <= 4) {
                    i = Math.round((values.rawAttack * (0.05 * level)) / values.weaponMultiplier);
                } else {
                    i = Math.round((values.rawAttack * 0.3) / values.weaponMultiplier);
                }
                values.attack += i;
                values.applied.push({
                    name: "Heroics",
                    level,
                    bonuses: [
                        "+" + i + " True Attack"
                    ]
                });
            }
        }
    },

    MaximumMight: {
        index: 9,
        name: "Maximum Might",
        levels: 3,
        apply: (level, values) => {
            if (level > 0 && level <= 3) {
                values.affinity += level * 10;
                values.applied.push({
                    name: "Maximum Might",
                    level,
                    bonuses: [
                        "+" + (level * 10) + "% Affinity"
                    ]
                });
            }
        }
    },

    NonElementalBoost: {
        index: 10,
        name: "Non-elemental Boost",
        levels: 1,
        apply: (level, values) => {
            if (level === 1) {
                values.attack += Math.round((values.rawAttack * 0.1) / values.weaponMultiplier);
                values.applied.push({
                    name: "Non-elemental Boost",
                    level,
                    bonuses: [
                        "+" + Math.round((values.rawAttack * 0.1) / values.weaponMultiplier) + " True Attack"
                    ]
                });
            }
        }
    },

    PeakPerformance: {
        index: 11,
        name: "Peak Performance",
        levels: 3,
        apply: (level, values) => {
            if (level > 0 && level <= 3) {
                let i;
                switch (level) {
                    case 1: i = 5;
                        break;
                    default: i = (level - 1) * 10;
                }
                values.attack += i;
                values.applied.push({
                    name: "Peak Performance",
                    level,
                    bonuses: [
                        "+" + i + " True Attack"
                    ]
                });
            }
        }
    },

    Resentment: {
        index: 12,
        name: "Resentment",
        levels: 5,
        apply: (level, values) => {
            if (level > 0 && level <= 5) {
                values.attack += 5 * level;
                values.applied.push({
                    name: "Resentment",
                    level,
                    bonuses: [
                        "+" + (5 * level) + " True Attack"
                    ]
                });
            }
        }
    },

    WeaknessExploit: {
        index: 13,
        name: "Weakness Exploit",
        levels: 3,
        apply: (level, values) => {
            if (level > 0 && level <= 3) {
                let i;
                switch (level) {
                    case 3: i = 50;
                        break;
                    default: i = 15 * level;
                }
                values.affinity += i;
                values.applied.push({
                    name: "Weakness Exploit",
                    level,
                    bonuses: [
                        "+" + i + "% Affinity"
                    ]
                });
            }
        }
    }
}

