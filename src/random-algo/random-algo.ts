import { Move, getMoves, makeMove } from "@panda-chess/pdc-core";
import { GameTree } from "../game-tree";
import { GenericAlgorithm } from "../generic-algo";
import { v4 as uuid } from "uuid";

export const randomAlgo: GenericAlgorithm = (pieces, color) => {
    const gameTree: GameTree = {
        pieces: pieces,
        value: 0,
        children: []
    };

    const currentPieces = pieces.filter(x=>x.color === color).filter(x=>x.position.x !== -1 && x.position.y !== -1);

    for(const piece of currentPieces) {
        const moves: Move[] = getMoves(piece, pieces);

        for(const move of moves) {
            const newPieces = makeMove(move, pieces);
            const value = Math.floor(Math.random() * 10);
            const identificableMove = {
                id: uuid(),
                move: move
            };

            gameTree.children.push({
                pieces: newPieces,
                value: value,
                move: identificableMove,
                children: []
            });
        }
    }

    return gameTree;
};