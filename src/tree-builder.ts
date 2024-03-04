// import { GameTree } from "./game-tree";
// import { generateChildren } from "./children-generator";

// export const buildTree = (gameTree: GameTree, color: "white" | "black", iterations: number): GameTree | null => {
//     if(iterations === 0) {
//         return null;
//     }

//     const gameTrees = generateChildren(gameTree, color);

//     for(const tree of gameTrees) {
//         tree.value = Math.floor(Math.random() * 10);
//         const newTree = buildTree(tree, color === "white" ? "black" : "white", iterations - 1);

//         if(newTree) {
//             tree.children.push(newTree);
//         }
//     }

//     gameTree.children = gameTrees;

//     return gameTree;
// };