export type MapToWith<T, V> = { [key in keyof T]: V };

export type NamePath = string | string[];
