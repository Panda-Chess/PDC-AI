import { describe } from "@jest/globals";
import { Piece, PieceType, generatePieceSet } from '@panda-chess/pdc-core';
import { buildTree } from './tree-builder';

describe('TreeBuilder', () => {
    it('should build a tree', () => {
        const pieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Pawn,
                position: { x: 0, y: 1 },
                wasMoved: false
            },
            {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.Pawn,
                position: { x: 1, y: 1 },
                wasMoved: false
            },
            {
                pieceId: "3",
                color: "black",
                pieceType: PieceType.Pawn,
                position: { x: 0, y: 6 },
                wasMoved: false
            },
            {
                pieceId: "4",
                color: "black",
                pieceType: PieceType.Pawn,
                position: { x: 1, y: 6 },
                wasMoved: false
            }
        ];

        const gameTree = buildTree({children: [], pieces, value: 0}, "white", 2);

        console.log(gameTree);
    });
});