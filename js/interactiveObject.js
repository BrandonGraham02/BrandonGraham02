AFRAME.registerComponent('interactiveObject', {
    init: function () {
        this.el.sceneEl.addEventListener('click', () => {
            if (this.el.object3D.visible) {
                console.log("clicked object: " + this.el.id);
            }
        });
    }
});