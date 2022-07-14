<template>
  <div class="wrapper">
    <header>
      <p>Hiiiii im inigo</p>
    </header>
    <div class="nav-bar">
      <nav class="flex">
        <div class="navBar hidden flex">
          <ul>
            <div><li><a href="/">Home</a></li></div>
            <div><li><a href="/about">About Me</a></li></div>
            <div><li><a href="#">My Work</a></li></div>
            <div><li><a href="#">Contact Me</a></li></div>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
$(function () {
  const offsettopvalue = $('nav').offset().top;

  $(this).scroll(function () {
    const scrolltopvalue = $(this).scrollTop();

    if (scrolltopvalue >= offsettopvalue) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #ccc;
}

.wrapper {
  width: 100%;
  overflow: hidden;
}

header {
  width: 100%;
  height: 250px;
  background-image: url("../assets/cover4.jpg");
}

header p {
  text-align: center;
  font-weight: 900;
  font-family: cursive;
  font-size: 32px;
  color: #fff;
  line-height: 250px;
}

nav {
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .4);
}

ul {
  list-style: none;
  width: 100%;
  margin: 0 auto;
}

ul li {
  float: left;
  text-align: center;
  width: 25%;
  line-height: 50px;
}

ul li a {
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-weight: 900;
  font-family: arial;
}

ul li a:hover {
  color: #00bfb6;
}

navBar hidden flex {
  text-align: center;
}

.content {
  margin-bottom: 30px;
;
}

.fixed {
  position: fixed;
  top: 0;
}

.nav-bar {
  height: 50px;
}
</style>
