<template>
  <v-expansion-panels focusable>
    <h1>Frequently asked questions</h1>
    <v-expansion-panel v-for="(item, i) in 4" :key="i">
      <v-expansion-panel-header>How does it work?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "Questions"
};
</script>
