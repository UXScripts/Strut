/*
@author Matt Crinklaw-Vogt
*/
define(["./ComponentView", "../Templates"], function(ComponentView) {
  return ComponentView.extend({
    transforms: ["rotateX", "rotateY", "rotateZ", "scale"],
    events: function() {
      return {
        "mousedown": "mousedown",
        "click": "clicked",
        "deltadrag span[data-delta='rotateX']": "rotateX",
        "deltadrag span[data-delta='rotateY']": "rotateY",
        "deltadrag span[data-delta='rotateZ']": "rotateZ",
        "deltadragStart span[data-delta='rotateX']": "rotateXStart",
        "deltadragStart span[data-delta='rotateY']": "rotateYStart",
        "deltadragStart span[data-delta='rotateZ']": "rotateZStart"
      };
    },
    initialize: function() {
      return ComponentView.prototype.initialize.apply(this, arguments);
    },
    rotateX: function(e, deltas) {
      var rot;
      rot = this._calcRot(deltas);
      this.model.set("rotateX", this._initialRotX + rot - this._rotXOffset);
      return this._setUpdatedTransform();
    },
    rotateY: function(e, deltas) {
      var rot;
      rot = this._calcRot(deltas);
      this.model.set("rotateY", this._initialRotY + rot - this._rotYOffset);
      return this._setUpdatedTransform();
    },
    rotateZ: function(e, deltas) {
      var rot;
      rot = this._calcRot(deltas);
      this.model.set("rotateZ", this._initialRotZ + rot - this._rotZOffset);
      return this._setUpdatedTransform();
    },
    rotateXStart: function(e, deltas) {
      this.updateOrigin();
      this._rotXOffset = this._calcRot(deltas);
      return this._initialRotX = this.model.get("rotateX");
    },
    rotateYStart: function(e, deltas) {
      this.updateOrigin();
      this._rotYOffset = this._calcRot(deltas);
      return this._initialRotY = this.model.get("rotateY");
    },
    rotateZStart: function(e, deltas) {
      this.updateOrigin();
      this._rotZOffset = this._calcRot(deltas);
      return this._initialRotZ = this.model.get("rotateZ");
    },
    __getTemplate: function() {
      return Templates.ThreeDRotableComponentView;
    },
    constructor: function ThreeDRotableComponentView() {
			ComponentView.prototype.constructor.apply(this, arguments);
		}
  });
});