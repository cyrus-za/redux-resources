"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var effects_1 = require("redux-saga/effects");
var api_1 = require("../../api");
var js_file_download_1 = require("js-file-download");
function getDocuments(_a) {
    var response, error_1;
    var query = _a.query;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.getDocumentsLoading())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.documentApi.getDocuments, query)];
            case 2:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.getDocumentsFulfilled(response))];
            case 3:
                _b.sent();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.getDocumentsRejected(error_1))];
            case 5:
                _b.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.getDocuments = getDocuments;
function downloadDocument(_a) {
    var downloadResponse, fileName, win, error_2;
    var document = _a.document, preview = _a.preview;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 10]);
                if (!(preview === true)) return [3 /*break*/, 2];
                return [4 /*yield*/, effects_1.call(previewDocument, { document: document })];
            case 1:
                _b.sent();
                return [2 /*return*/];
            case 2: return [4 /*yield*/, effects_1.put(actions_1.documentActions.downloadDocumentLoading())];
            case 3:
                _b.sent();
                if (!(document.provider === 'approveme')) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.call(api_1.documentApi.downloadDocument, document.id, document.provider)];
            case 4:
                downloadResponse = _b.sent();
                fileName = downloadResponse.headers['content-disposition'].replace('attachment; filename=', '');
                js_file_download_1.default(downloadResponse.data, fileName, downloadResponse.headers['content-type']);
                return [3 /*break*/, 6];
            case 5:
                win = window.open(document.download_url, '_blank');
                win.focus();
                _b.label = 6;
            case 6: return [4 /*yield*/, effects_1.put(actions_1.documentActions.downloadDocumentFulfilled())];
            case 7:
                _b.sent();
                return [3 /*break*/, 10];
            case 8:
                error_2 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.downloadDocumentRejected(error_2))];
            case 9:
                _b.sent();
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}
exports.downloadDocument = downloadDocument;
function previewDocument(_a) {
    var downloadResponse, fileURL, error_3;
    var document = _a.document;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.downloadDocumentLoading())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.documentApi.downloadDocument, document.id, document.provider)];
            case 2:
                downloadResponse = _b.sent();
                fileURL = URL.createObjectURL(downloadResponse.data);
                window.open(fileURL);
                window.focus();
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.downloadDocumentFulfilled())];
            case 3:
                _b.sent();
                return [3 /*break*/, 6];
            case 4:
                error_3 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.documentActions.downloadDocumentRejected(error_3))];
            case 5:
                _b.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.previewDocument = previewDocument;
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.documentActions.GET_DOCUMENTS, getDocuments)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.documentActions.DOWNLOAD_DOCUMENT, downloadDocument)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
