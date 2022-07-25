<template>
  <div class="wrapper">
    <header class="bg-inigo">
      <p>Hiiiii im inigo</p>
    </header>
    <div class="nav-bar">
      <nav>
        <div class="text-center">
          <ul>
            <div>
              <router-link active-class="active-link" exact-active-class="exact-active-link" to="/">
                <li class="hover:bg-slate-100 font-black hover:text-green-500 uppercase">
                  Home
                </li>
              </router-link>
            </div>
            <div>
              <router-link to="/about">
                <li class="hover:bg-slate-100 font-black uppercase">
                  About
                </li>
              </router-link>
            </div>
            <div>
              <li>
                <router-link active-class="active-link" exact-active-class="exact-active-link" to="/work">
                  My Work
                </router-link>
              </li>
            </div>
            <div>
              <li>
                <router-link active-class="active-link" exact-active-class="exact-active-link" to="/contact">
                  Contact Me
                </router-link>
              </li>
            </div>
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

.active-link {
  color: red;
  font-weight: 900;
}

.exact-active-link {
  color: red;
  font-weight: 900;
}

.wrapper {
  width: 100%;
  overflow: hidden;
}

header {
  width: 100%;
  height: 250px;
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
  background: white;
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
  background: white;
  margin-bottom: 20px;
}

ul li a {
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-weight: 900;
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
