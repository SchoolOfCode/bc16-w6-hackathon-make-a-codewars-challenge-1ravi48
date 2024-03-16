Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

# Identifying Life-bearing Planets

A team of astrobiologists need your help! They have been searching endlessly through the vast cosmos for planets outside of our solar system. They have the data on the planets but need your help to ascertain whether it could be possible for any of these planets to harbour life.

Your task is to write a function that takes in an array as an argument that holds data about a particular star system. The first item in this array will provide information about a star (an object with three properties – name, temperature, and radius). The rest of the items in the array will each contain information about the different planets that orbit that star (each item will be an object with two properties – name and distance (from its star)).

An example argument that could be passed into the function is:

```javascript
[
    {
        name: “The Sun”, 
        temperature: 5773, 
        radius: 696340000
    }, 
    {
        name: “Mercury”, 
        distance: 57900000000
    }, 
    {
        name: “Earth”, 
        distance: 149600000000
    }, 
    {
        name: “Jupiter”,
        distance: 778500000000
    }
]
```

The function should return one of the following four strings depending on how many planets were identified as potentials for harbouring life:

- If none found: "The star named XXXX has no orbiting planets that could harbour life."
- If one found: "The star named XXXX has the following orbiting planet that could harbour life: YYYY."
- If two found: "The star named XXXX has the following orbiting planets that could harbour life: YYYY and ZZZZ."
- If three or more found: "The star named XXXX has the following orbiting planets that could harbour life: XXXX, ZZZZ, …, and AAAA."

The planets should be listed in order of how they appear in the array.

Examples:

```javascript
Array passed in:
[
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
]
```

should return - "The star named Nova Aurora has the following orbiting planets that could harbour life: Heliosia and Astoria."

Array passed in:
```javascript
[
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
]
```

should return - "The star named Luminastra has no orbiting planets that could harbour life."

So, how can you use the passsed in data to help you write your function? Well, one of the most crucial factors in determining whether a planet can harbour life is whether that planet can hold liquid water. Water exists in liquid state when 0 < temperature on planet < 100 degrees celsius (not inclusive of those values). For the purpose of simplicity, we have assumed all planets have atmospheric pressures comparable to Earth. Therefore, you are going to assume that if a given planet has a temperature between these values, it has the potential to harbour life.

The following equation tells you how the temperature of a planet can be worked out if you know the temperature of its star, its distance from its star and the radius of its star:

Tempertature of planet [in Kelvin] = (Temperature of star [in Kelvin])*squareRoot(R/2D)

Where:
- R is the radius of the star
- D is the distance of the planet from its star

Important note: in this equation, temperature is measured in Kelvin (K), and so are the values on the temperature data provided to you. To convert Kelvin into degrees celsius, you simply just need to subtract 273.15.

```javascript
export function potentialForLife (arr) {
	// write your code – good luck you hero!!
}
```