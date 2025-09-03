export interface CardPokemon { 
    id: number; 
    name: string; 
    hp: number;
    type: string[];
    images: {
    small: string;
    large: string;
    };
}