function firstUniqueChar(str) {
    const freq = {};
    for (const ch of str.toLowerCase()) {
        freq[ch] = (freq[ch] | 0) + 1;
    }
    for (const ch of str) {
        if (freq[ch.toLowerCase()] === 1) return ch;
    }
    return '';
}
// Test Code for Task 6
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc'));