const AffinitySliding = {
    name: "Affinity Sliding",
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
}

const Agitator = {
    name: "Agitator",
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
}

const AttackBoost = {
    name: "Attack Boost",
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
}

const Bludgeoner = {
    name: "Bludgeoner",
    apply: (level, values) => {
        if (level === 1) {
            let i;
            switch(values.sharpness) {
                case "Red": i = Math.round((values.rawAttack * 0.1578) / values.weaponMultiplier);
                    break;
                case "Orange": i = Math.round((values.rawAttack * 0.1578) / values.weaponMultiplier);
                    break;
                case "Yellow": i = Math.round((values.rawAttack * 0.1315) / values.weaponMultiplier);
                    break;
                case "Green": i = Math.round((values.rawAttack * 0.0789) / values.weaponMultiplier);
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
}

const CriticalBoost = {
    name: "Critical Boost",
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
}

const CriticalEye = {
    name: "Critical Eye",
    apply: (level, values) => {
        if (level > 0 && level <= 7) {
            let i;
            switch(level) {
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
}

const Fortify = {
    name: "Fortify",
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
}

const Heroics = {
    name: "Heroics",
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
}

const MaximumMight = {
    name: "Maximum Might",
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
}

const NonElementalBoost = {
    name: "Non-elemental Boost",
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
}

const PeakPerformance = {
    name: "Peak Performance",
    apply: (level, values) => {
        if (level > 0 && level <= 3) {
            let i;
            switch(level) {
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
}

const Resentment = {
    name: "Resentment",
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
}

const WeaknessExploit = {
    name: "Weakness Exploit",
    apply: (level, values) => {
        if (level > 0 && level <= 3) {
            let i;
            switch(level) {
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

const skills = [
    {
        skill: Bludgeoner,
        level: 1
    }
];

function test() {
    let values = {
        rawAttack: 912,
        rawElement: 100,
        weaponMultiplier: 4.8,
        sharpness: "Red",
        attack: 190,
        element: 0,
        affinity: -15,
        critDamage: 25,
        applied: []
    }
    for (let i = 0; i < skills.length; i++) {
        skills[i].skill.apply(skills[i].level, values);
    }
    console.log("Final Attack:", values.attack);
    console.log("Final Element:", values.element);
    console.log("Final Affinity:", values.affinity);
    console.log("Final Critical Damage:", values.critDamage);
    console.log("Applied:", values.applied);
}

test();