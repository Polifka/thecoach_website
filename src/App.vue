<template>
  <div id="material-kit">
    <div :class=" 'nav-open'">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>
