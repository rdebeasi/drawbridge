<template>
  <div class="container">
    <h1>Change Password</h1>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label" for="old-password">Old Password</label>
        <div class="col-sm-4">
          <input type="text" autofocus id="old-password" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="new-password">New Password</label>
        <div class="col-sm-4">
          <input type="text" id="new-password" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="new-password-again">New Password (again)</label>
        <div class="col-sm-4">
          <input type="text" id="new-password-again" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-primary btn-lg">Change Password</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>
