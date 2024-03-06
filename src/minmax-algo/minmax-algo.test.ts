import { describe } from "@jest/globals";
import { Piece, PieceType, generatePieceSet } from "@panda-chess/pdc-core";
import { minmaxAlgo } from "./minmax-algo"

describe("minmax-algo", () => {
    it("should return a move", () => {
        const pieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                position: {
                    x: 3,
                    y: 3
                }
            },
            {
                pieceId: "2",
                color: "white",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                position: {
                    x: 4,
                    y: 4
                }
            },
            {
                pieceId: "3",
                color: "white",
                wasMoved: false,
                pieceType: PieceType.King,
                position: {
                    x: 0,
                    y: 0
                }
            },
            {
                pieceId: "4",
                color: "black",
                wasMoved: false,
                pieceType: PieceType.King,
                position: {
                    x: 7,
                    y: 7
                }
            }
        ];

        const result = minmaxAlgo(pieces, "white");

        console.log(result);
    });
});