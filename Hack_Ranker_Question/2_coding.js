function solve(arr) {
    let freq = {};

    // Step 1: frequency map (O(n))
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Step 2: find min & max
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let minCount = freq[min];

    // Step 3: check next numbers
    let nextCount = 0;

    for (let i = 1; i <= minCount; i++) {
        let nextNum = min + i;

        if (freq[nextNum]) {
            nextCount = freq[nextNum];
            break; // first match only
        }
    }

    return [max, minCount, nextCount];
}

// Test
console.log(solve([1,1,3,4]));