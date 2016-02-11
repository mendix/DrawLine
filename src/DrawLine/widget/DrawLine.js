/**
	@file      : DrawLine.js
	@author    : Joël vd Graaf (original), Jelte Lagendijk (MX6 compatible version)
	@date      : 11-02-2016 (Update)
	@copyright : Mendix
	@license   : Please contact our sales department.
*/

define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dojo/dom-construct",
    "dojo/dom-class"
], function(declare, _WidgetBase, domConstruct, domClass) {
    "use strict";

    return declare("DrawLine.widget.DrawLine", [_WidgetBase], {

        // Modeler
        width       : 100,          // Length of the line in default procents.
        widthType   : "procent",   // The draw type of the line exact or variable
        thickness   : 1,            // thickness of the line in pixels
        align       : "",           // Align of the line left, center or right
        color       : "",            // The color of the line

        // Internal values
        _line: null,

        postCreate : function () {
            logger.debug(this.id + ".postCreate");
        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");
            if (this._line === null) {
                this.createLine(callback);
            } else {
                callback();
            }
        },

        createLine : function (callback) {
            logger.debug(this.id + ".createLine");

            this._line = domConstruct.create("hr", {
                "align": this.align,
                "style": "border-top: " + this.thickness + "px solid " + this.color + "; width: " + this.width + (this.widthType === "procent" ? "%" : "px")
            }, this.domNode);

            domClass.add(this.domNode, "separator-line");

            if (typeof callback === "function") {
                callback();
            }
        },

        uninitialize : function() {
            logger.debug(this.id + ".uninitialize");
        }

    });
});

require(["DrawLine/widget/DrawLine"], function() {
    "use strict";
});
