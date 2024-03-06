import { Piece, getMoves } from "@panda-chess/pdc-core";
import { v4 as uuid } from "uuid"; 
import { IdentificableMove } from "../identificable-move";

export const getChildren = (pieces: Piece[], color: "white" | "black"): IdentificableMove[] => {
    const currentPieces = pieces.filter((piece) => piece.color === color);
    const possibleMoves: IdentificableMove[] = [];

    for(const piece of currentPieces) {
        const moves = getMoves(piece, pieces);

        for(const move of moves) {
            const newMove: IdentificableMove = {
                id: uuid(),
                move: move,
                value: 0
            };
            
            possibleMoves.push(newMove);
        }
    }

    return possibleMoves;
};