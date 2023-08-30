<template>
  <div ref="zdogContainer" class="flex">
    <canvas ref="zdog" :key="key" class="my-auto cursor-pointer"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import Zdog from "zdog";

const zdog = ref("zdog");
const zdogContainer = ref("zdogContainer");
const key = ref(0);

let illoElem;
let illo;

onMounted(() => {
  zdogRender();
});

const zdogRender = () => {
  illoElem = zdog.value;
  let illoSize = 64;
  let minWindowSize = Math.min(
    zdogContainer.value.offsetWidth,
    window.innerHeight
  );
  let zoom = Math.floor(minWindowSize / illoSize);
  illoElem.setAttribute("width", illoSize * zoom);
  illoElem.setAttribute("height", illoSize * zoom);

  let isSpinning = true;
  let TAU = Zdog.TAU;

  illo = new Zdog.Illustration({
    element: illoElem,
    zoom: zoom,
    dragRotate: true,
    onDragStart: function () {
      isSpinning = false;
    },
  });

  // colors
  let green = "#33bebc";
  let orange = "#cc925c";
  let magenta = "#D972FF";
  let beige = "#111827";
  let blue = "#19297C";

  let colorWheel = [beige, magenta, orange, blue, green];

  // ----- model ----- //

  // top & bottom
  let cone = new Zdog.Cone({
    diameter: 8,
    length: 10,
    addTo: illo,
    translate: { y: -16 },
    // scale: { x: 2, y: 2 },
    rotate: { x: -TAU / 4 },
    color: colorWheel[1],
    backface: colorWheel[0],
    stroke: false,
  });
  cone.copy({
    translate: { y: 16 },
    rotate: { x: TAU / 4 },
  });

  [-1, 1].forEach(function (ySide) {
    for (let i = 0; i < 5; i++) {
      let rotor1 = new Zdog.Anchor({
        addTo: illo,
        rotate: { y: (TAU / 5) * i },
      });
      let rotor2 = new Zdog.Anchor({
        addTo: rotor1,
        rotate: { x: TAU / 6 },
      });

      cone.copy({
        addTo: rotor2,
        translate: { y: 16 * ySide },
        rotate: { x: (TAU / 4) * ySide },
        color: colorWheel[i],
        backface: colorWheel[(i + 7) % 5],
      });
    }
  });

  [-1, 1].forEach(function (ySide) {
    for (let i = 0; i < 5; i++) {
      let rotor1 = new Zdog.Anchor({
        addTo: illo,
        rotate: { y: (TAU / 5) * (i + 0.5) },
      });
      let rotor2 = new Zdog.Anchor({
        addTo: rotor1,
        rotate: { x: TAU / 10 },
      });

      cone.copy({
        addTo: rotor2,
        translate: { y: -16 * ySide },
        rotate: { x: (TAU / 4) * ySide },
        color: colorWheel[(i + 3) % 5],
        backface: colorWheel[i],
      });
    }
  });

  [-1, 1].forEach(function (ySide) {
    for (let i = 0; i < 5; i++) {
      let rotor1 = new Zdog.Anchor({
        addTo: illo,
        rotate: { y: (TAU / 5) * (i + 0.5) },
      });
      let rotor2 = new Zdog.Anchor({
        addTo: rotor1,
        rotate: { x: TAU / 4.5 },
      });

      cone.copy({
        addTo: rotor2,
        translate: { y: -16 * ySide },
        // scale: { y: -1 },
        rotate: { x: (TAU / 4) * ySide },
        color: colorWheel[(i + 1) % 5],
        backface: colorWheel[(i + 4) % 5],
      });
    }
  });

  // -- animate --- //

  let keyframes = [
    { x: TAU * 0, y: TAU * 0 },
    { x: (TAU * 1) / 2, y: (TAU * -1) / 2 },
    { x: TAU * 1, y: TAU * -1 },
  ];

  let ticker = 0;
  let cycleCount = 180;

  function animate() {
    spin();
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();

  // -- update -- //

  function spin() {
    if (!isSpinning) {
      return;
    }
    let progress = ticker / cycleCount;
    let tween = Zdog.easeInOut(progress % 1, 3);
    let turnLimit = keyframes.length - 1;
    let turn = Math.floor(progress % turnLimit);
    let keyA = keyframes[turn];
    let keyB = keyframes[turn + 1];
    let thetaX = Zdog.lerp(keyA.x, keyB.x, tween);
    illo.rotate.x = (Math.cos(thetaX) * TAU) / 12;
    illo.rotate.y = Zdog.lerp(keyA.y, keyB.y, tween);
    ticker++;
  }
};
</script>

<style lang="scss" scoped></style>
