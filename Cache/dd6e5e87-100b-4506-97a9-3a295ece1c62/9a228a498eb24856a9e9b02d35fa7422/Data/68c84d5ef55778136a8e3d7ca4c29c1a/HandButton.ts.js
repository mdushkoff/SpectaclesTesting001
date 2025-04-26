"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandButton = void 0;
var __selfType = requireType("./HandButton.ts");
function component(target) { target.getTypeName = function () { return __selfType; }; }
const SIK_1 = require("./SpectaclesInteractionKit/SIK");
let HandButton = class HandButton extends BaseScriptComponent {
    __initialize() {
        super.__initialize();
        this.leftHand = SIK_1.SIK.HandInputData.getHand("left");
    }
};
exports.HandButton = HandButton;
exports.HandButton = HandButton = __decorate([
    component
], HandButton);
//# sourceMappingURL=HandButton.ts.js.map