<script>
  import Nav from "../components/nav.svelte";
</script>
<Nav/>
<div class="px-8 max-w-8xl mx-auto">
  <slot></slot>
</div>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>