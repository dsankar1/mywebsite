import { Ammo, AmmoMult } from "../constants";

export const getAmmoMultiplier = ammo => {
    switch(ammo) {
        case Ammo.Normal:
            return AmmoMult.Normal;
        case Ammo.CloseRange:
            return AmmoMult.CloseRange;
        case Ammo.Power:
            return AmmoMult.Power;
        default:
            return 0;
    }
}