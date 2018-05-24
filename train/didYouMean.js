/**
 * @param {Array<string>} words 
 */
function Dictionary(words) {
    this.words = words;
}

/**
 * @param {string} term 
 */
Dictionary.prototype.findMostSimilar = function (term) {
    let result = this.words.reduce(({t, len}, word) => {
        // word
        let a = word.padEnd(term.length).split('').filter((val, i) => {
            return val === term[i];
        }).length;
        if (a > len) return {t: word, len: a};
        return {t, len};
    }, {t: '', len: 0});
    console.log(result);
    
    return result.t;
};


function TestDictionary(spec) {
    var matcher = new Dictionary(spec.words);
    spec.expectations.forEach(function (e) {
        console.log(
            matcher.findMostSimilar(e.query) == e.nearest, 'expected findMostSimilar("' + e.query + '") == "' + e.nearest + '"'
        );
    });
}

TestDictionary({
    words: ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'],
    expectations: [{
            query: 'strawbery',
            nearest: 'strawberry'
        },
        {
            query: 'berry',
            nearest: 'cherry'
        }
    ],
});

TestDictionary({
    words: ['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript'],
    expectations: [{
            query: 'heaven',
            nearest: 'java'
        },
        {
            query: 'javascript',
            nearest: 'javascript'
        }
    ],
});