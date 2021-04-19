/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
let originalColor = 0;
let c = [0, 0, -1, 1];
let r = [-1, 1, 0, 0];
var floodFill = function(image, sr, sc, newColor) {
    originalColor = image[sr][sc]
    if (originalColor != newColor) {
        dfs(image, sr, sc, newColor);
    }
    return image;
};

function dfs (image, sr, sc, newColor) {
    if (image[sr][sc] == originalColor) {
        image[sr][sc] = newColor;
        for (let i = 0; i < 4; i++) {
            let nr = sr + r[i], nc = sc + c[i];
            if (nr >= 0 && nr < image.length && nc >= 0 && nc < image[0].length) {
                dfs(image, nr, nc, newColor);
            }
        }
    }
}