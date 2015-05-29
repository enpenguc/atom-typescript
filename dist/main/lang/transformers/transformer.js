var path = require("path");
function isTransformerFile(filePath) {
    var ext = path.extname(filePath);
    return ext == '.tst';
}
exports.isTransformerFile = isTransformerFile;
function getPseudoFilePath(filePath) {
    if (isTransformerFile(filePath)) {
        return getPseudoTsFile(filePath);
    }
    return filePath;
}
exports.getPseudoFilePath = getPseudoFilePath;
function getPseudoTsFile(filePath) {
    return filePath + '.ts';
}
function isRawFile(filePath) {
    return endsWith(filePath, ".raw.ts");
}
exports.isRawFile = isRawFile;
function isPseudoFile(filePath) {
    var ext = path.extname(filePath);
    return endsWith(filePath, ".tst.ts");
}
exports.isPseudoFile = isPseudoFile;
function endsWith(str, suffix) {
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
}
