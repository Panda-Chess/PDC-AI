import { Piece, PieceType } from "@panda-chess/pdc-core";

export const pieceValues = {
    [PieceType.Pawn]: 1,
    [PieceType.Knight]: 3,
    [PieceType.Bishop]: 3,
    [PieceType.Rook]: 5,
    [PieceType.Queen]: 9,
    [PieceType.King]: 100
} as const;

export const getPiecesValue = (pieces: Piece[], color: "white" | "black"): number => {
    return pieces
        .filter(x=>x.color === color)
        .filter(x=>x.position.x !== -1 && x.position.y !== -1)
        .reduce((acc, piece) => acc + pieceValues[piece.pieceType], 0)
        - pieces
            .filter(x=>x.color !== color)
            .filter(x=>x.position.x !== -1 && x.position.y !== -1)
            .reduce((acc, piece) => acc + pieceValues[piece.pieceType], 0);
};