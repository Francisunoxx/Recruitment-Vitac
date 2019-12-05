<template>
  <div class="divNumberContainer">
    <div class="divNumber">
      {{ currentIndex() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberIndex",
  data: function() {
    return {
      myIndex: 1
    };
  },
  props: ["index"],
  computed: {
    currentIndex() {
      return index => this.myIndex + this.index;
    }
  }
};
</script>

<style scoped>

.divNumberContainer {
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divNumberContainer > .divNumber {
  width: 30px;
  height: 28px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
}

</style>
