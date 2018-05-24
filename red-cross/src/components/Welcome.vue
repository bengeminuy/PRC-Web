<template>
  <div id="function-tabs" class="row">
    <h2 class="header">List of Users</h2>
    <div class="d-flex">
      <div class="col ml-0 s12 m6 l4 xl3">
        <div class="card">
          <div class="card-image">
            <img src="../assets/abstract-business-code-270348.jpg">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#modal1" class="teal-text modal-trigger">Edit User</a>
            <a href="#modal2" class="red-text modal-trigger">Delete User</a>
          </div>
        </div>
      </div>
      <div class="col ml-0 s12 m6 l4 xl3">
        <div class="card">
          <div class="card-image">
            <img src="../assets/abstract-business-code-270348.jpg">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#modal1" class="teal-text modal-trigger">Edit User</a>
            <a href="#modal2" class="red-text modal-trigger">Delete User</a>
          </div>
        </div>
      </div>
      <div class="col ml-0 s12 m6 l4 xl3">
        <div class="card">
          <div class="card-image">
            <img src="../assets/abstract-business-code-270348.jpg">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#modal1" class="teal-text modal-trigger">Edit User</a>
            <a href="#modal2" class="red-text modal-trigger">Delete User</a>
          </div>
        </div>
      </div>
      <div class="col ml-0 s12 m6 l4 xl3">
        <div class="card">
          <div class="card-image">
            <img src="../assets/abstract-business-code-270348.jpg">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#modal1" class="teal-text modal-trigger">Edit User</a>
            <a href="#modal2" class="red-text modal-trigger">Delete User</a>
          </div>
        </div>
      </div>
      <div class="col ml-0 s12 m6 l4 xl3">
        <a href="#modal3" class="add-new grey-text modal-trigger">
          <i class="material-icons large">add_circle_outline</i>
          <div class="card-title">Add New User</div>
        </a>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Edit</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="modal2" class="modal">
      <div class="modal-content">
        <h4>Delete</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="modal3" class="modal">
      <div class="modal-content">
        <h4>Add New</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Welcome",
    data() {
        return {};
    }
};
$(document).ready(function() {
    $(".tabs").tabs();
    $('.modal').modal();
});
</script>

<style>
#function-tabs {
  margin-top: 20vh;
  padding-left: 10%;
  padding-right: 10%;
  height: 80vh;
  overflow: auto;
}
#function-tabs h2 {
  margin-top: 0;
  font-size: 28px;
}
.d-flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.ml-0 {
  margin-left: 0 !important;
}
.add-new {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
}
</style>

