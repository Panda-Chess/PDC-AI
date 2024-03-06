import { Piece } from "@panda-chess/pdc-core";
import { IdentificableMove } from "./identificable-move";

export type GenericAlgorithm = (pieces: Piece[], color: "white" | "black") => IdentificableMove[];