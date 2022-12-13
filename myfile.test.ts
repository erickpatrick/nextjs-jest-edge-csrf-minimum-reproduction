/**
 * @jest-environment node
 */

import { exportedFunction } from "./myfile";
import { NextRequest } from "next/server";

describe('ddd', () => {
    it('description', async () => {
        // Arrange
        expect(await exportedFunction({} as NextRequest)).toBe(undefined)
        // Act
        // Assert
    });
})
