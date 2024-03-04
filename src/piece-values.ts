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
    return pieces.filter(x=>x.color === color).reduce((acc, piece) => acc + pieceValues[piece.pieceType], 0);
};