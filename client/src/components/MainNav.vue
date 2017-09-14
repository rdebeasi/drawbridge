<template>
  <nav class="navbar navbar-default navbar-pf" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/">
        <div class="navbar-brand-org">CASL</div>
        <div class="navbar-brand-product">
          Drawbridge
        </div>
      </router-link>
    </div>
    <div class="collapse navbar-collapse navbar-collapse-1">
      <ul class="nav navbar-nav navbar-utility">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="pficon pficon-user"></span>
            Brian Johnson <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Another link</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li class="divider"></li>
            <li class="dropdown-submenu">
              <a tabindex="-1" href="#">More options</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Another link</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">One more separated link</a>
                </li>
              </ul>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">One more separated link</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-primary">
        <li>
          <router-link to="/change-password/">Change Password</router-link>
        </li>
        <li>
          <a href="#">Manage Account</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Mimic the standard logo style to start. Eventually, we should create an SVG logo. */
.navbar-brand-org,
.navbar-brand-product {
  font-size: 12.5px;
  line-height: 0.75;
  height: 10px;
  overflow: hidden;
  color: #fff; /* Override hover state */
  float: left;
}

.navbar-brand {
  overflow: hidden;
  text-transform: uppercase;
}

.navbar-brand-org {
  font-weight: bold;
  letter-spacing: 3px;
}

.navbar-brand-product {
  margin-left: 5px;
}
</style>
