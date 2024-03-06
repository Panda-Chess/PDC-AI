import { Move, Piece } from "@panda-chess/pdc-core";
import { GenericAlgorithm } from "./generic-algo";

export const getBestMove = (pieces: Piece[], color: "black" | "white", algorithm: GenericAlgorithm): Move => {
    return algorithm(pieces, color).reduce((prev, curr)=> prev.value > curr.value? prev: curr).move;
};

export const getAllMoves = (pieces: Piece[], color: "black" | "white", algorithm: GenericAlgorithm): Move[] => {
    return algorithm(pieces, color).map(x=>x.move);
};