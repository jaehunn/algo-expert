// babc
// c -> *
// b -> c -> *
// [a -> b -> c -> *] find
// b -> a -> b -> c -> *

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // O(n^2) / O(n^2)
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i += 1) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;

    for (let j = i; j < string.length; j += 1) {
      const letter = string[j];

      // init
      if (!(letter in node)) node[letter] = {};

      // add
      node = node[letter];
    }

    // length -> add end symbol
    node[this.endSymbol] = true;
  }

  // O(m) / O(1)
  contains(string) {
    let node = this.root;

    for (const letter of string) {
      if (!(letter in node)) return false;

      node = node[letter];
    }

    return this.endSymbol in node;
  }
}
