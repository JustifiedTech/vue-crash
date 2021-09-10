<template>
  <auth>
    <div class="register p-5">
      <h1 class="mb-2">Justified Technologies</h1>
      <p>Welcome, Please create your account.</p>
      <form @submit.prevent="handleRegister" class="mt-2 mt-sm-5">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label class="">First Name*</label>
              <input type="text" class="form-control" placeholder="First Name" />
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label class="">Last Name*</label>
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="">Email*</label>
              <input type="email" class="form-control" placeholder="Email" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="control-label">Username*</label>
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
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                I accept terms & policy
              </label>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary text-uppercase">Sign up</button>
          </div>
          <div class="col-12 mt-3">
            <p>
              Already have an account ?<router-link to="/login"> Sign In</router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
  </auth>
</template>
<script>
export default {
  name: "Register",
  components: {
    Auth: require("@/components/Auth").default,
  },
};
</script>
