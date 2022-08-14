import {describe, it, expect} from "vitest";
import { foo } from "@libs/foo/demo";
import { bar } from "@libs/bar/demo";
import {lastValueFrom, of} from "rxjs";
// uncomment this two lines to make it work
// import { webcrypto } from "node:crypto";
// globalThis.crypto = webcrypto as Crypto;

describe('foo', () => {
    it("sum", () => {
        expect(foo).to.be.eql("FOO")
        expect(bar).to.be.eql("BAR");
        expect(globalThis.crypto).to.be.not.undefined;
        globalThis.crypto.randomUUID();//?
    })

    it("rxjs", async () => {
        expect(await lastValueFrom(of(1))).to.be.eql(1);
    })
});