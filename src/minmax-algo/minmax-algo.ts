import { Move, Piece, makeMove } from "@panda-chess/pdc-core";
import { GenericAlgorithm } from "../generic-algo";
import { v4 as uuid } from "uuid";
import { IdentificableMove } from "../identificable-move";
import { getChildren } from "./children-generator";
import { getPiecesValue } from "../piece-values";

export const minmaxAlgo: GenericAlgorithm = (pieces, color) => {
    const children = getChildren(pieces, color);
    const moves: IdentificableMove[] = [];

    for(const child of children) {
        moves.push(rateMove(makeMove(child.move!, pieces), child.move, color, 2, color === "white"? "black" : "white"));
    }

    return moves;
};

const rateMove = (pieces: Piece[], move: Move, color: "white" | "black", depth: number, currentColor: "white" | "black"): IdentificableMove => {
    if(depth === 0) {
        const value = getPiecesValue(pieces, color);

        return {
            id: uuid(),
            move,
            value
        };
    }

    const children = getChildren(pieces, currentColor);

    const currentMoves = children.map((child) => {
        return rateMove(makeMove(child.move!, pieces),child.move, color, depth - 1, currentColor === "white"? "black" : "white");
    }).flat();

    let value = 0;

    if(currentMoves.length !== 0) {
        value = currentMoves[0].value;
    }

    for(const currentMove of currentMoves) {
        if(currentColor === color) {
            if(currentMove.value > value) {
                value = currentMove.value;
            }
        } else {
            if(currentMove.value < value) {
                value = currentMove.value;
            }
        }
    }

    return {
        id: uuid(),
        move,
        value
    };
};