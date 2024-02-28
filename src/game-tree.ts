import { Move, Piece } from "@panda-chess/pdc-core";

export type GameTree = {
    children: GameTree[];
    move?: Move;
    pieces: Piece[];
    value: number;
};