AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            if (this.el.object3D.visible) {
                console.log(this.el.id);
            }

        });

        this.el.addEventListener('click', () => {
            if (this.el.object3D.visible) {
                console.log("clicked object: " + this.el.id);
            }
        });
    }
});