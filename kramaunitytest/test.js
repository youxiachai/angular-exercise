/**
 * Created by youxiachai on 14-5-28.
 */

describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("onan").toEqual(reverse("nano"));
    });
});