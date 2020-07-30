<template>
  <div
    id="app"
      v-bind:class="[isLarge ? 'lg' : 'sm']"
      >
      <div
        id="header_left"
        @click="toggleClass()"
        >
        Logo
      </div>
      <div
        id="header_right"
        v-bind:style="{ background: activeColor }"
        @click="toggleColor()"
        >
          <router-link to="/">Home </router-link> |
          <router-link to="/about"> About </router-link>
      </div>
      <div
        id="aside_left"
        class="sidebar_left"
        >
        Left Sidebar
      </div>
      <div id="article">
        <router-view/>
      </div>
      <div id="aside_right" class="sidebar-right">
        Right Sidebar
      </div>
      <div id="footer">
        Footer
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLarge: true,
      activeColor: 'red'
    }
  },
  methods: {
    toggleClass: function () {
      this.isLarge = !this.isLarge
    },
    toggleColor: function () {
      this.activeColor === 'red' ? this.activeColor = 'green' : this.activeColor = 'red'
    }
  }
}
</script>

<style lang="stylus">
  @import "./assets/stylus/style.styl"
  #app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    display grid
    grid-template-columns 50px 100px auto 150px
    grid-template-rows 3em auto 3em
    min-height 100vh
  .sm
    #header_left, #aside_left
      grid-column 1 / 2
    #header_right, footer
      grid-column 2 / 5
    #article
      grid-column 2 / 4
    #footer
      grid-column 2 / 5
  #header_left
    background-color #aaaaaa
    grid-column 1 / 3
    transition .5s ease
  #header_right
    //background-color #cccaca
    grid-column 3 / 5
    .sm
      grid-column 2 / 5
  #aside_left
    background-color $green
    grid-column 1 / 3
    grid-row 2 / 4;
    transition .5s ease
    .sm
      grid-column 1 / 2
  #article
    transition 1s ease
    background-color $violet
    grid-column 3 / 4
    transition .5s ease
    .sm
      grid-column 2 / 4
  #aside_right
    background-color $green
  #footer
    background-color #aaaaaa
    grid-column 3 / 5
  #header_left, #header_right, #aside_left, #aside_right, #article, #footer
    display flex
    align-items center
    justify-content center
    margin-bottom 0

  @media all and (max-width 700px)
    .grid
      display grid
      grid-template-columns $left_sidebar_width auto 150px
      grid-template-rows 3em 3em 3em auto 3em 3em
      min-height 100vh
    #aside_left, #aside_right, #header_left, #header_right, #article, #footer
      grid-column 1 / 5
    #aside_left
      grid-row 2 / 3

</style>
