/**
 * Created by jcabresos on 3/31/15.
 */
import subtext = require('../src/subsy');
import should = require('should');

describe("Text replacement using JSON", () => {
    var text = "@name.singular@ is @shape@ in shape. Scientifically known as @name.scientific@. @name.plural@ are very @taste@.";

    var apples = {
        "name": {
            "singular": "Apple",
            "plural": "Apples",
            "scientific": "Malus domestica"
        },
        "shape": "round",
        "taste": "sweet and juicy"
    }

    it("replaces text with JSON", () => {
        var output = text.replace(/@+[\w.]+@/g, subtext.json(apples));
        should.equal(output, "Apple is round in shape. Scientifically known as Malus domestica. Apples are very sweet and juicy.");
    })

})