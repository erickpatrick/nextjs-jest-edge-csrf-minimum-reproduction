/**
 * @jest-environment node
 */

import { xxxx } from "./myfile";
import { NextRequest } from "next/server";

describe('ddd', () => {
    it('description', async () => {
        // Arrange
        expect(await xxxx({} as NextRequest)).toBe(undefined)
        // Act
        // Assert
    });
})
