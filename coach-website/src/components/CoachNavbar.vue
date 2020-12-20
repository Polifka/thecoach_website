<template>
  <div>
    <div>
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand
          ><a class="navbar-brand"
            ><router-link to="/">Home</router-link></a
          ></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link"
                  ><router-link to="/Team">Team</router-link
                  ><span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item active">
                <a class="nav-link"
                  ><router-link to="/History">History</router-link
                  ><span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item active">
                <a class="nav-link"
                  ><router-link to="/Score">Score</router-link
                  ><span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item active">
                <a class="nav-link"
                  ><router-link to="/Contact">Contact</router-link
                  ><span class="sr-only">(current)</span></a
                >
              </li>
            </ul>
          </b-navbar-nav>

          <!-- Right aligned nav item -->
          <b-navbar-nav class="ml-auto" style="margin-right: 15px">
            <li class="nav-item active" style="float: left">
              <a
                class="nav-link"
                href="https://www.instagram.com/thebuisnesscoach/"
                target="_blank"
                >Instagram!</a
              >
            </li>
          </b-navbar-nav>

          <b-navbar-nav>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active" style="margin-right: 10px">
                <b-button variant="outline-success">
                  <a href="https://paypal.me/pools/c/8tHh6GbWRi" target="_blank"
                    >DONATE!</a
                  >
                </b-button>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "coachNavbar",
  props: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
</style>