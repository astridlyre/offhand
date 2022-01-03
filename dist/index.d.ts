declare class Randomizer {
    LOWERCASE: string[];
    UPPERCASE: string[];
    LOWERCASE_AND_UPPERCASE: string[];
    randomDigit(): number;
    randomLowerCase(): string;
    randomUpperCase(): string;
    randomLetter(): string;
    randomIndex<T>(source: T[]): T;
    randomKey(object: Record<PropertyKey, any>): string;
}
declare class Replacer {
    randomizer: Randomizer;
    constructor(randomizer: Randomizer);
    letterify(str: string): string;
    numberify(str: string): string;
    join(...tokens: string[]): string;
}
declare class PersonProvider {
    #private;
    constructor(props: IProviderProps);
    name(): string;
    firstName(): string;
    lastName(): string;
    fullName(): string;
    userName(): string;
    companyName(): string;
    companyPhrase(): string;
    phoneNumber(): string;
}
interface IConfigOptions {
    locale: string;
}
declare class LocaleProvider {
    randomizer: Randomizer;
    config: IConfigOptions;
    constructor(randomizer: Randomizer, config: IConfigOptions);
    stateAbbr(): string;
    static canHandle(_config: IConfigOptions): boolean;
    static for(props: IProviderProps): LocaleProvider;
    static register(provider: typeof LocaleProvider): typeof LocaleProvider;
}
declare class DateProvider {
    #private;
    constructor(props: IProviderProps);
    century(): string;
    ampm(): string;
    dayOfYear(): number;
    dayOfMonth(): string;
    dayOfWeek(): string;
    monthNumber(): number;
    monthName(): string;
    year(): number;
    timezone(): string;
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
    constructor(props: IProviderProps);
    paymentDetails(): ICreditCardDetails;
}
declare class ColorProvider {
    #private;
    constructor(props: IProviderProps);
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
declare class AddressProvider {
    #private;
    CITY_PREFIXES: string[];
    CITY_SUFFIXES: string[];
    STREET_SUFFIXES: string[];
    COUNTRIES: string[];
    constructor(props: IProviderProps);
    cityPrefix(): string;
    citySuffix(): string;
    streetSuffix(): string;
    country(): string;
    buildingNumber(): string;
    zip(digits?: number): string;
    street(): string;
    city(): string;
    address1(): string;
    address2(): string;
    address(): string;
    latitude(): string;
    longitude(): string;
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
interface IProviderProps {
    config?: IConfigOptions;
    randomizer?: Randomizer;
    replacer?: Replacer;
    randomGenerator?: RandomGenerator;
    address?: AddressProvider;
    color?: ColorProvider;
    creditCard?: CreditCardProvider;
    date?: DateProvider;
    locale?: LocaleProvider;
    person?: PersonProvider;
}
declare class Provider {
    randomizer: Randomizer;
    replacer: Replacer;
    randomGenerator: RandomGenerator;
    address: AddressProvider;
    color: ColorProvider;
    creditCard: CreditCardProvider;
    date: DateProvider;
    locale: LocaleProvider;
    person: PersonProvider;
    constructor(randomizer: Randomizer, replacer: Replacer, randomGenerator: RandomGenerator, config: IConfigOptions);
}
export class Offhand {
    static setup(config: IConfigOptions): Provider;
    constructor();
}

//# sourceMappingURL=index.d.ts.map
