interface IConfigOptions {
    locale: string;
}
declare class Randomizer {
    LOWERCASE: string[];
    UPPERCASE: string[];
    LOWERCASE_AND_UPPERCASE: string[];
    randomDigit: () => number;
    randomLowerCase: () => string;
    randomUpperCase: () => string;
    randomLetter: () => string;
    randomIndex<T>(source: T[]): T;
    randomKey(object: Record<PropertyKey, any>): string;
}
declare class Replacer {
    #private;
    constructor(randomizer: Randomizer);
    letterify(str: string): string;
    numberify(str: string): string;
    join(...tokens: string[]): string;
}
interface GeneratorGetterType {
    <T>(generator: Generator<T, any, T>): T;
}
declare class RandomGenerator {
    #private;
    from<T>(target: Iterable<T> | (() => any)): GeneratorGetterType;
    constructor(randomizer: Randomizer);
    randomGeneratorArray<T>(array: T[]): GeneratorGetterType;
    randomGeneratorObject<T>(object: Record<PropertyKey, T>): GeneratorGetterType;
}
declare class DateProvider {
    #private;
    constructor(randomizer: Randomizer, config: IConfigOptions);
    century: () => string;
    ampm: () => string;
    dayOfYear: () => number;
    dayOfMonth: () => string;
    dayOfWeek: () => string;
    monthNumber: () => number;
    monthName: () => string;
    year: () => number;
    timezone: () => string;
    unix(): number;
    time(): string;
    random(format?: string): string | Date;
    get CENTURIES(): string[];
    get TIMEZONES(): string[];
}
type TCreditCardVendorName = 'MasterCard' | 'Visa' | 'American Express' | 'Discover Card';
interface ICreditCardDetails {
    type: TCreditCardVendorName;
    number: string;
    expiration: string;
    holder: string;
}
declare class CreditCardProvider {
    #private;
    constructor(randomizer: Randomizer, replacer: Replacer, date: DateProvider);
    paymentDetails(): ICreditCardDetails;
}
declare class ColorProvider {
    #private;
    constructor(randomizer: Randomizer);
    opacity: () => number;
    value: () => number;
    safeName: () => string;
    name: () => string;
    rgbArray: () => number[];
    rgbaArray: () => number[];
    rgba: () => string;
    rgb: () => string;
    hex: () => string;
    get COLOR_NAMES(): string[];
    get SAFE_COLORS(): string[];
}
export class Offhand {
    randomizer: Randomizer;
    replacer: Replacer;
    randomGenerator: RandomGenerator;
    date: DateProvider;
    creditCard: CreditCardProvider;
    color: ColorProvider;
    constructor(config: IConfigOptions);
}

//# sourceMappingURL=index.d.ts.map
