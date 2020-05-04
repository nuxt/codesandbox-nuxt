<template>
  <button class="btn btn-blue">
    <slot>Button</slot>
  </button>
</template>

<style>
.btn {
  @apply font-bold py-1 px-4 rounded-md;
  &.btn-blue {
    @apply bg-blue-700 text-white;
    &:hover {
      @apply bg-blue-800;
    }
    &:active {
      @apply bg-blue-600;
    }
  }
}
</style>