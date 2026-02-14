window.onload = function () {

    const left = document.getElementById("line-left");
    const heart = document.getElementById("heart");
    const right = document.getElementById("line-right");

    const durationLeft = 2000;
    const durationHeart = 1000;
    const durationRight = 2000;
    const pauseBetweenLoops = 800;

    function prepare(el) {
        const len = el.getTotalLength();
        el.style.strokeDasharray = len;
        el.style.strokeDashoffset = len;
        el.style.transition = "none";
    }

    function animate(el, duration) {
        const len = el.getTotalLength();
        el.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
        el.style.strokeDashoffset = 0;
    }

    function resetAll() {
        prepare(left);
        prepare(heart);
        prepare(right);
    }

    function loopAnimation() {

        resetAll();

        // Forzar reflow para reiniciar animación infinitamente
        void left.offsetWidth;

        // Línea izquierda
        animate(left, durationLeft);

        // Corazón
        setTimeout(() => {
            animate(heart, durationHeart);
        }, durationLeft);

        // Línea derecha
        setTimeout(() => {
            animate(right, durationRight);
        }, durationLeft + durationHeart);

        // Repetir ciclo
        setTimeout(() => {
            loopAnimation();
        }, durationLeft + durationHeart + durationRight + pauseBetweenLoops);
    }

    loopAnimation();
};
