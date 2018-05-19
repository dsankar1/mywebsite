export const ElementCap = rawElement => {
    if (rawElement <= 120) {
        return rawElement + 40;
    } else if (rawElement <= 180) {
        return rawElement + 50;
    } else if (rawElement <= 210) {
        return rawElement + 60;
    }else if (rawElement <= 240) {
        return rawElement + 70;
    } else if (rawElement <= 270) {
        return rawElement + 80;
    } else if (rawElement <= 300) {
        return rawElement + 90;
    } else if (rawElement <= 330) {
        return rawElement + 100;
    } else if (rawElement <= 360) {
        return rawElement + 110;
    } else if (rawElement <= 390) {
        return rawElement + 120;
    } else if (rawElement <= 420) {
        return rawElement + 130;
    } else if (rawElement <= 450) {
        return rawElement + 130;
    } else if (rawElement <= 480) {
        return rawElement + 140;
    } else {
        return rawElement + 150;
    }
}