<template>
  <auth>
      <div class="login p-50">
      <h1 class="mb-2">Justified Technologies</h1>
      <p>Welcome back, please login to your account.</p>
      <form @submit.prevent="handleLogin">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="control-label">User Name*</label>
              <input type="text" class="form-control" placeholder="Username" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="control-label">Password*</label>
              <input type="password" class="form-control" placeholder="Password" />
            </div>
          </div>
          <div class="col-12">
            <div class="d-block d-sm-flex align-items-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck"> Remember Me </label>
              </div>
              <a href="javascript:void(0);" class="ml-auto">Forgot Password ?</a>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary text-uppercase">Sign In</button>
          </div>
          <div class="col-12 mt-3">
            <p>Don't have an account ?<router-link to="/register"> Sign Up</router-link></p>
          </div>
        </div>
      </form>
    </div>
  </auth>
</template>
<script>
export default {
  name: "Login",
  components: {
    Auth: require("@/components/Auth").default,
  },
};
</script>
