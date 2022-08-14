import {describe, it, expect} from "vitest";
import {foo} from "@libs/foo/demo";

describe('bar', () => {
    it("sum", () => {
        expect(foo).to.be.eql("FOO")
    })
});