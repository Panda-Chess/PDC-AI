// import { getMoves, makeMove } from "@panda-chess/pdc-core";
// import { GameTree } from "./game-tree";

// export const generateChildren = (gameTree: GameTree, color: "white" | "black"): GameTree[] => {
//     const currentPieces = gameTree.pieces.filter((piece) => piece.color === color);
//     const gameTrees: GameTree[] = [];

//     for(const piece of currentPieces) {
//         const moves = getMoves(piece, gameTree.pieces);

//         for(const move of moves) {
//             const newPosition = makeMove(move, gameTree.pieces);

//             const newTree = {
//                 children: [],
//                 move,
//                 pieces: newPosition,
//                 value: 0
//             };
            
//             gameTrees.push(newTree);
//         }
//     }

//     return gameTrees;
// };