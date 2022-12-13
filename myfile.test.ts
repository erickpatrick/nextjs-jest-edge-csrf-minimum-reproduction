/**
 * @jest-environment node
 */

import { exportedFunction } from "./myfile";
import { NextRequest } from "next/server";

describe('ddd', () => {
    it('description of testcase', async () => {
        expect(await exportedFunction({} as NextRequest)).toBe(undefined)
    });
})
