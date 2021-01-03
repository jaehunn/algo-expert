/**
 * Suffix Trie Construction
 *
 * Write a SuffixTrie class for a Suffix-Trie-like data structure.
 *
 * The class should have a root property set to be the root node of the trie and should support:
 *  - Creating the trie from a string; this will be done by calling the populateSuffixTrieFrom method upon class instantiation, which should populate the root of the class
 *  - Searching for strings in the trie.
 *
 * Note that every string added to the trie should end with the special endSymbol character: "*"
 */

interface TrieNode {
  [key: string]: TrieNode | boolean;
}

class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // O(n^2) / O(n^2)
  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i += 1) {
      this.insertSubstringStartingAt(i, string); // target(= node) reset
    }
  }

  insertSubstringStartingAt(i: number, string: string) {
    let node = this.root;

    for (let j = i; j < string.length; j += 1) {
      const letter = string[j];

      // hashing
      if (!(letter in node)) node[letter] = {};

      node = node[letter] as TrieNode;
    }

    node[this.endSymbol] = true;
  }

  // O(m) / O(1)
  contains(string: string) {
    let node = this.root;

    for (const letter of string) {
      if (!(letter in node)) return false;

      node = node[letter] as TrieNode;
    }

    // prototype chain
    return this.endSymbol in node;
  }
}
