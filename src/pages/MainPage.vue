<script setup>
  import login from "./../state/login";
</script>

<script>
export default {
  name: "MainPage",
}
</script>

<template>
  <div class="container" style="margin-top:20px">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{login.state.user.name}} Star Charts</h5>
            <div class="accordion" id="accordionExample" style="margin:auto;">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Name of your star sheet</strong>
                    <p>Kids on this list</p>
                    <p>Share with</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button class="btn btn-danger me-md-2" type="button">Delete</button>
                      <button class="btn btn-primary" type="button">Open</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>