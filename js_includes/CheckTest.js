define_ibex_controller({
    name: "CheckTest",

    jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove 'click to continue message'.         
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "PictureAccept", this.options,
                ]
            });
        }
    },

    properties: { }
});