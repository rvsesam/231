<template>
  <div id="app" :style="cssProps">
      <div id="header">
        <h1><img src="./assets/logo.png"> dynamic Grid Demo</h1>
        <p>A simple example of css grid in action.</p>
      </div>

      <div id="controls">
        <div>
          <h4>Sidebar width <em>&mdash; try it!</em> <label class="green" for="side-size">{{ this.sideSize }}</label></h4>
          <input type="range" id="side-size" min="0" max="400" step="5" v-model="sideSize" v-on:change="changeSideSize">
        </div>
        <div>Sidebar color: <input type="color" v-model="sideColor" v-on:change="changeSideColor"></div>
        <div><button class="button is-primary" @click="changeFooter">Footer</button></div>
      </div>
      <div id="grid">
        <div id="logo" >
          Logo
        </div>
        <div
          id="menu"
          v-bind:style="{ background: activeColor }"
          @click="toggleHeaderColor()"
          >
            <router-link to="/">Home </router-link> |
            <router-link to="/about"> About </router-link>
        </div>
        <div id="side">
          Left Sidebar
        </div>
        <div id="main">
          <router-view/>
        </div>
        <div id="footer">
        </div>
      </div>
  </div>
</template>

<script>
import config from './config/'

export default {
  data () {
    return {
      activeColor: 'red',
      sideColor: config.sideColor,
      sideSize: config.sideSize,
      footerHeight: config.footerHeight
    }
  },
  computed: {
    cssProps () {
      return {
        '--sideSize': this.sideSize + 'px',
        '--sideColor': this.sideColor,
        '--footerHeight': this.footerHeight
      }
    }
  },
  methods: {
    toggleHeaderColor: function () {
      this.activeColor === 'red' ? this.activeColor = 'green' : this.activeColor = 'red'
    },
    changeSideSize: function () {
      document.querySelector('#grid').style.setProperty('--sideSize', this.sideSize + 'px')
      console.log(this.sideSize)
    },
    changeSideColor: function () {
      document.querySelector('#side').style.setProperty('--sideColor', this.sideColor)
    },
    changeFooter: function () {
      console.log(this.footerHeight)
      this.footerHeight === '0em' ? this.footerHeight = '3em' : this.footerHeight = '0em'
      console.log(this.footerHeight)
      document.querySelector('#footer').style.setProperty('--footerHeight', this.footerHeight)
    }
  }
}
</script>

<style lang="stylus">
  @import "./styles/style.styl"

  *
    margin: 0
    padding: 0
    line-height: 1.5em

  body
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    background-color: #222129
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
    font-size: 14px
    color: white

  #app
    display grid
    grid-template-columns auto
    grid-template-rows 100px 130px auto
    grid-template-areas 'header' 'controls' 'demo'
    min-height 100vh

  #grid
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color: white
    grid-area demo
    display grid
    grid-template-columns var(--sideSize) auto
    grid-template-rows 3em auto var(--footerHeight)
    grid-template-areas 'logo menu' 'side main' 'side footer'
    @media all and (max-width 700px)
      grid-template-columns auto
      grid-template-rows 50px 50px 50px auto
      grid-template-areas 'logo' 'menu' 'side' 'main' 'footer'

  #logo
    background-color #aaaaaa
    grid-area logo
    transition .5s ease
  #menu
    grid-area menu
  #side
    background-color var(--sideColor)
    grid-area side
    transition .5s ease
  #main
    background-color $violet
    grid-area main
    transition .5s ease
  #footer
    grid-area: footer
    background-color #aaaaaa
  #logo, #menu, #side, #main, #footer
    display flex
    align-items center
    justify-content center

  a
    color: inherit
    text-decoration: none

  h1
    font-size: 25px
    color: white

  h3
    font-size: 14px
    margin-bottom: 5px

  h4
    font-size: 14px
    margin-bottom: 10px
    font-weight: 700

  p
    margin-bottom: 16px
    line-height: 1.5em

  .green
    background: $spotify-green

#header
  display: flex
  align-items: center
  padding: 20px 4%
  margin-bottom: 20px
  background: $spotify-black
  grid-area header
  @media screen and (max-width:768px)
    flex-flow: column

  h1, p
    width: 50%;
    @media screen and (max-width:768px)
      width: 100%;

  p
    text-align: right
    color: rgba(white, 0.65)
    @media screen and (max-width:768px)
      text-align: left !important
      margin-top: 10px
      text-indent: 63px

  img
    width: 48px
    height: 48px
    vertical-align: middle
    margin-right: 10px

#controls
  margin 3% 2%
  display -webkit-box
  grid-area controls
  display flex
  div
    width: 24%
    padding: 0 2%
    input[type="range"]
      width: 100%
      margin-bottom: 30px
    label
      color: white
      padding: 2px 4px
      border-radius: 2px
      float: right
  h4 em
    font-style: normal
    font-weight: 400
    color: rgba(white, 0.4)
  p
    color: rgba(white, 0.70)

</style>
