import { describe } from "@jest/globals";
import { Piece, generatePieceSet } from "@panda-chess/pdc-core";
import { getBestMove } from "./move-generator";
import { minmaxAlgo } from "./minmax-algo";

describe("minmax-algo", () => {
    it("should return a move", () => {
        const pieces: Piece[] = generatePieceSet();

        // const result = getBestMove(pieces, "white", minmaxAlgo);

        // console.log(result);
    });
});