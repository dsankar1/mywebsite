import { Weapon, ClassMult } from "../constants";

export const isRanged = weaponClass => (weaponClass === Weapon.Bow || weaponClass === Weapon.LightBowgun || weaponClass === Weapon.HeavyBowgun);

export const MotionValues = new Map(
    [
        [
            Weapon.Longsword, 
            {
                name: "Step Slash",
                hits: 1,
                mv: .19
            }
        ],
        [
            Weapon.DualBlades, 
            {
                name: "Double Slash",
                hits: 2,
                mv: .072
            }
        ],
        [
            Weapon.SwordAndShield, 
            {
                name: "Chop",
                hits: 1,
                mv: .113
            }
        ],
        [
            Weapon.Greatsword, 
            {
                name: "Overhead Slash",
                hits: 1,
                mv: .383
            }
        ],
        [
            Weapon.Hammer, 
            {
                name: "Overhead Smash I",
                hits: 1,
                mv: .3
            }
        ],
        [
            Weapon.HuntingHorn, 
            {
                name: "Left Slam",
                hits: 1,
                mv: .1
            }
        ],
        [
            Weapon.Lance, 
            {
                name: "High Thrust I",
                hits: 1,
                mv: .1763
            }
        ],
        [
            Weapon.GunLance, 
            {
                name: "Lateral Thrust",
                hits: 1,
                mv: .197
            }
        ],
        [
            Weapon.SwitchAxe, 
            {
                name: "Axe: Side Slash",
                hits: 1,
                mv: .185
            }
        ],
        [
            Weapon.ChargeBlade, 
            {
                name: "Axe: Rising Slash",
                hits: 1,
                mv: .165
            }
        ],
        [
            Weapon.InsectGlaive, 
            {
                name: "Rising Slash Combo",
                hits: 2,
                mv: .08
            }
        ],
        [
            Weapon.Bow, 
            {
                name: "Shoot (Critical Distance)",
                hits: 1,
                mv: .056
            }
        ],
        [
            Weapon.HeavyBowgun, 
            {
                name: "Normal Ammo I (Critical Distance)",
                hits: 1,
                mv: .08
            }
        ],
        [
            Weapon.LightBowgun, 
            {
                name: "Normal Ammo I (Critical Distance)",
                hits: 3,
                mv: .053
            }
        ]
    ]
)

export const getMotionValue = weaponClass => {
    let mv;
    if ((mv = MotionValues.get(weaponClass)) === undefined) {
        return {};
    } else {
        return mv;
    }
}

export const getClassMultiplier = weapon => {
    switch(weapon) {
        case Weapon.ChargeBlade:
            return ClassMult.ChargeBlade;
        case Weapon.DualBlades:
            return ClassMult.DualBlades;
        case Weapon.GunLance:
            return ClassMult.GunLance;
        case Weapon.Hammer:
            return ClassMult.Hammer;
        case Weapon.HuntingHorn:
            return ClassMult.HuntingHorn;
        case Weapon.InsectGlaive:
            return ClassMult.InsectGlaive;
        case Weapon.Lance:
            return ClassMult.Lance;
        case Weapon.Longsword:
            return ClassMult.Longsword;
        case Weapon.Greatsword:
            return ClassMult.Greatsword;
        case Weapon.SwitchAxe:
            return ClassMult.SwitchAxe;
        case Weapon.SwordAndShield:
            return ClassMult.SwordAndShield;
        case Weapon.Bow:
            return ClassMult.Bow;
        case Weapon.LightBowgun:
            return ClassMult.LightBowgun;
        case Weapon.HeavyBowgun: 
            return ClassMult.HeavyBowgun;
        default: 
            return 0;
    }
}