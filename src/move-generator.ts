import { Move, Piece } from "@panda-chess/pdc-core";
import { GenericAlgorithm } from "./generic-algo";
import { GameTree } from "./game-tree";

export const getBestMove = (pieces: Piece[], color: "black" | "white", algorithm: GenericAlgorithm): Move => {
    return algorithm(pieces, color).children.reduce((prev, curr)=> prev.value > curr.value? prev: curr).move!.move;
};

export const getAllMoves = (pieces: Piece[], color: "black" | "white", algorithm: GenericAlgorithm): GameTree[] => {
    return algorithm(pieces, color).children.flatMap(x=>x.children);
};