import { describe } from "@jest/globals";
import { generatePieceSet } from '@panda-chess/pdc-core';
import { buildTree } from './tree-builder';

describe('TreeBuilder', () => {
    it('should build a tree', () => {
        const pieces = generatePieceSet();

        const gameTree = buildTree({children: [], pieces, value: 0}, "white", 2);

        // console.log(gameTree);
    });
});