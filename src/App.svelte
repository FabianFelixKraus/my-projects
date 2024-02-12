<script lang="ts">
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import ProjectPreview from "./lib/ProjectPreview.svelte";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
  });
</script>

<main>
  <Header />
  <div class="flex">
    <ProjectPreview />
    <ProjectPreview />
  </div>
  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
