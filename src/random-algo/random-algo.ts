import { Move, getMoves } from "@panda-chess/pdc-core";
import { GenericAlgorithm } from "../generic-algo";
import { v4 as uuid } from "uuid";
import { IdentificableMove } from "../identificable-move";

export const randomAlgo: GenericAlgorithm = (pieces, color) => {
    const possibleMoves: IdentificableMove[] = [];

    const currentPieces = pieces.filter(x=>x.color === color).filter(x=>x.position.x !== -1 && x.position.y !== -1);

    for(const piece of currentPieces) {
        const moves: Move[] = getMoves(piece, pieces);

        for(const move of moves) {
            const value = Math.floor(Math.random() * 10);
            const identificableMove = {
                id: uuid(),
                move: move,
                value: value
            };

            possibleMoves.push(identificableMove);
        }
    }

    return possibleMoves;
};