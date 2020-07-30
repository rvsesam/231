<template>
  <div
    id="app"
      v-bind:class="[sidebar_collapsed ? 'small_sidebar' : 'large_sidbar']"
      >
      <div
        id="header_left"
        @click="toggleSidebarWidth()"
        >
        Logo
      </div>
      <div
        id="header_right"
        v-bind:style="{ background: activeColor }"
        @click="toggleHeaderColor()"
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
      sidebar_collapsed: false,
      activeColor: 'red'
    }
  },
  methods: {
    toggleSidebarWidth: function () {
      this.sidebar_collapsed = !this.sidebar_collapsed
    },
    toggleHeaderColor: function () {
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
    grid-template-areas:
      'logo logo menu menu'
      'sideleft sideleft article sideright'
      'sideleft sideleft footer footer'
    min-height 100vh
  #header_left
    background-color #aaaaaa
    grid-area: logo
    transition .5s ease
  #header_right
    //background-color #cccaca
    grid-area: menu
  #aside_left
    background-color $green
    grid-area: sideleft
    transition .5s ease
  #article
    grid-area: article
    background-color $violet
    transition .5s ease
  #aside_right
    background-color $green
    grid-area: sideright
  #footer
    grid-area: footer
    background-color #aaaaaa
  #header_left, #header_right, #aside_left, #aside_right, #article, #footer
    display flex
    align-items center
    justify-content center

  @media all and (max-width 700px)
    grid-template-areas:
      'logo'
      'menu'
      'sideleft'
      'article'
      'sideright'
      'footer'

</style>
