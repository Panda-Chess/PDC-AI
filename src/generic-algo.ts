import { Piece } from "@panda-chess/pdc-core";
import { GameTree } from "./game-tree";

export type GenericAlgorithm = (pieces: Piece[], color: "white" | "black") => GameTree;