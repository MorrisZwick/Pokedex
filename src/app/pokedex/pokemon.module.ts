
export interface Pokemon {
    name: string;
    id: number;
    weight: number;
    height: number;
    types: Types[];
    sprites: Sprites;
    stats: Stats[];
    abilities: Abilities[];
    moves: Moves[];

}

export interface Sprites {
    front_default: string;
    front_shiny: string;
}

export interface Types {
    slot: number;
    type: Type;
}

export interface Type {
    name: string;
    url: string;
}
export interface Stats {
    base_stat: number;
    effort: number;
    stat: Stat;
}
export interface Stat {
    name: string;
    url: string;
}
export interface Abilities {
    slot: number;
    is_hidden: boolean;
    ability: Ability;
}
export interface Ability {
    name: string;
    url: string;
}

export interface Moves {
    move: Move;
}

export interface Move {
    name: string;
    url: string;

}