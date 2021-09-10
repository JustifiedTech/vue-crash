<template>
  <div class="app-contant">
    <div class="bg-white">
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-sm-6 col-lg-5 col-xxl-3 align-self-center order-2 order-sm-1">
            <div class="d-flex align-items-center h-100-vh">
              <slot />
            </div>
          </div>
          <div
            class="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2"
          >
            <div class="row align-items-center h-100">
              <div class="col-7 mx-auto">
                <img class="img-fluid" src="assets/img/bg/login.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end login contant-->
</template>
<script>
export default {};
</script>
