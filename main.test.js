import { test, expect } from "vitest";
import { potentialForLife } from "./main";

test ("testing whether function correctly identifies planets that have the potential to harbour life", () => {
    expect(potentialForLife([
        {
            name: "Nova Aurora",
            temperature: 7500,
            radius: 1000000000
        },
        {
            name: "Dracoa",
            distance: 90000000
        },
        {
            name: "Astralis",
            distance: 150000000
        },
        {
            name: "Heliosia",
            distance: 220000000
        },
        {
            name: "Astoria",
            distance: 350000000
        },
        {
            name: "Tyrian",
            distance: 600000000
        }
    ])).toBe("The star named Nova Aurora has the following orbiting planets that could harbour life: Heliosia and Astoria.");
    expect(potentialForLife([
        {
            name: "Nova Aurora",
            temperature: 7500,
            radius: 1000000000
        },
        {
            name: "Dracoa",
            distance: 90000000
        },
        {
            name: "Astralis",
            distance: 150000000
        },
        {
            name: "Heliosia",
            distance: 220000000
        },
        {
            name: "Astoria",
            distance: 400000000
        },
        {
            name: "Tyrian",
            distance: 600000000
        }
    ])).toBe("The star named Nova Aurora has the following orbiting planet that could harbour life: Heliosia.");
    expect(potentialForLife([
        {
            name: "Nova Aurora",
            temperature: 7500,
            radius: 1000000000
        },
        {
            name: "Dracoa",
            distance: 90000000
        },
        {
            name: "Astralis",
            distance: 150000000
        },
        {
            name: "Heliosia",
            distance: 380000000
        },
        {
            name: "Astoria",
            distance: 500000000
        },
        {
            name: "Tyrian",
            distance: 600000000
        }
    ])).toBe("The star named Nova Aurora has no orbiting planets that could harbour life.");
    expect(potentialForLife([
        {
            name: "Nova Aurora",
            temperature: 7500,
            radius: 1000000000
        },
        {
            name: "Dracoa",
            distance: 90000000
        },
        {
            name: "Astralis",
            distance: 150000000
        },
        {
            name: "Heliosia",
            distance: 202000000
        },
        {
            name: "Astoria",
            distance: 290000000
        },
        {
            name: "Tyrian",
            distance: 376000000
        }
    ])).toBe("The star named Nova Aurora has the following orbiting planets that could harbour life: Heliosia, Astoria, and Tyrian.");
    expect(potentialForLife([
        {
            name: "Luminastra",
            temperature: 10000,
            radius: 700000
        },
        {
            name: "Pantheon",
            distance: 110000000
        },
        {
            name: "Altairis",
            distance: 240000000
        },
        {
            name: "Lyra",
            distance: 480000000
        },
        {
            name: "Sylphara",
            distance: 620000000
        }
    ])).toBe("The star named Luminastra has no orbiting planets that could harbour life.");
    expect(potentialForLife([
        {
            name: "Luminastra",
            temperature: 10000,
            radius: 700000
        },
        {
            name: "Pantheon",
            distance: 110000000
        },
        {
            name: "Altairis",
            distance: 255000000
        },
        {
            name: "Lyra",
            distance: 480000000
        },
        {
            name: "Sylphara",
            distance: 620000000
        }
    ])).toBe("The star named Luminastra has the following orbiting planet that could harbour life: Altairis.");
    expect(potentialForLife([
        {
            name: "Luminastra",
            temperature: 10000,
            radius: 700000
        },
        {
            name: "Pantheon",
            distance: 110000000
        },
        {
            name: "Altairis",
            distance: 255000000
        },
        {
            name: "Lyra",
            distance: 469000000
        },
        {
            name: "Sylphara",
            distance: 620000000
        }
    ])).toBe("The star named Luminastra has the following orbiting planets that could harbour life: Altairis and Lyra.");
    expect(potentialForLife([
        {
            name: "Luminastra",
            temperature: 10000,
            radius: 700000
        },
        {
            name: "Pantheon",
            distance: 110000000
        },
        {
            name: "Altairis",
            distance: 255000000
        },
        {
            name: "Lyra",
            distance: 300000000
        },
        {
            name: "Sylphara",
            distance: 465000000
        }
    ])).toBe("The star named Luminastra has the following orbiting planets that could harbour life: Altairis, Lyra, and Sylphara.");
    expect(potentialForLife([
        {
            name: "Phoenix Solstice",
            temperature: 15000,
            radius: 5000000
        },
        {
            name: "Stellaris",
            distance: 1000000000
        },
        {
            name: "Persephone",
            distance: 4040000000
        },
        {
            name: "Zenithar",
            distance: 4700000000
        },
        {
            name: "Chronos",
            distance: 5900000000
        },
        {
            name: "Aquaria",
            distance: 7200000000
        },
        {
            name: "Mirandia",
            distance: 8900000000
        },
    ])).toBe("The star named Phoenix Solstice has the following orbiting planets that could harbour life: Persephone, Zenithar, Chronos, and Aquaria.");
} )