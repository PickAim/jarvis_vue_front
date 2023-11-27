<script setup lang="ts">

</script>

<template>
  <div class="under-construction-wrapper">
    <div class="under-construction-labels">
      <h1>Эта страница находится <br> в разработке!</h1>
      <h2>Но не надолго :)</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

$breakpoints: (
    980px: 0.8,
    768px: 0.6,
    580px: 0.4,
    390px: 0.3,
);

$height: 400px;
$h1-fz: 60px;
$h2-fz: 20px;
$brace-fz: 200px;
$gap: 100px;
$shift: -80px;

//@each $width, $margin in $breakpoints {
//  @media screen and (max-width: $width) {
//    .element {
//      margin-top: $margin;
//    }
//  }
//}

.under-construction-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: calc($height * var(--scale));
  --scale: 1;

  .under-construction-labels {
    display: flex;
    flex-direction: column;
    gap: calc($gap * var(--scale));
    align-items: center;
    transform: rotate(-10deg);

    h1, h2 {
      user-select: none;
    }

    h1 {
      text-align: center;
      font-size: calc($h1-fz * var(--scale));
      font-weight: 700;
    }

    h2 {
      font-size: calc($h2-fz * var(--scale));
    }

    &::before, &::after {
      position: absolute;
      top: calc($shift * var(--scale));
      font-size: calc($brace-fz * var(--scale));
    }

    &::before {
      content: "[";
      left: calc($shift * var(--scale));
      color: var.$blue-jarvis-color;
    }

    &::after {
      content: "]";
      right: calc($shift * var(--scale));
      color: var.$green-jarvis-color;
    }
  }

  @each $width, $scale in $breakpoints {
    @media screen and (max-width: $width) {
      --scale: #{$scale};
    }
  }
}
</style>