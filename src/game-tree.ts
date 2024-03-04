import { Piece } from "@panda-chess/pdc-core";
import { IdentificableMove } from "./identificable-move";

export type GameTree = {
    children: GameTree[];
    move?: IdentificableMove;
    pieces: Piece[];
    value: number;
};