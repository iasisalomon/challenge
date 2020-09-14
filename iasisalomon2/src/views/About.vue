<template>
  <div class="graph">
    <div class="container">
      <div class="row">
        <appCandle></appCandle>
    </div>
  </div>
</div>
</template>

<script>

import appCandle from '../components/appCandle'

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    appCandle,
  }
};
</script>
