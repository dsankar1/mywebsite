import { Sharpness, SharpnessMult } from "../constants";

export const getSharpnessMultiplier = sharpness => {
    switch(sharpness) {
        case Sharpness.White:
            return SharpnessMult.White;
        case Sharpness.Blue:
            return SharpnessMult.Blue;
        case Sharpness.Green:
            return SharpnessMult.Green;
        case Sharpness.Yellow:
            return SharpnessMult.Yellow;
        case Sharpness.Orange:
            return SharpnessMult.Orange;
        case Sharpness.Red:
            return SharpnessMult.Red;
        default:
            return 0;
    }
}