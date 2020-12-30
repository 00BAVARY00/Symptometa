const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h3 class="card-title">Please select your gender and age.</h3> </br> </br>
        <div class="card-text">
          <form>
            <div class="form-group row">
              <label for="input-sex" class="col-sm-2 col-form-label">Gender</label>
              <div class="col-sm-10">      
                <div class="custom-control custom-radio custom-control-inline" >
                  <input type="radio" id="sex-radio-inline-1" 
                    name="sex-radio-inline" class="input-sex custom-control-input" value="male" checked >
                  <label class="custom-control-label" for="sex-radio-inline-1">
                    <i class="fa fa-fw fa-male"></i> male
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sex-radio-inline-2" 
                    name="sex-radio-inline" class="input-sex custom-control-input" value="female">
                  <label class="custom-control-label" for="sex-radio-inline-2">
                    <i class="fa fa-fw fa-female"></i> female
                  </label>
                </div>
                <!-- <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sex-radio-inline-3" 
                    name="sex-radio-inline" class="input-sex custom-control-input" value="مهندس مدني" checked>
                  <label class="custom-control-label" for="sex-radio-inline-3">
                    مهندس مدني
                  </label>
                </div> -->
              </div>
            </div> </br>
            <div class="form-group row">
              <label for="input-age" class="col-sm-2 col-form-label">Age</label>
              <div class="col-sm-2">
                <input type="number" class="form-control" id="input-age" value="20">
              </div>
            </div>
          </form>
          <p class="text-muted small" style="position: absolute; bottom:8px; left:16px; font-size: 18px;">
            <i class="fa fa-info-circle"></i>
            The gender and age attributes are two required elements of every request to diagnosis.
            </p>
        </div>
      `);
  });
};

export default template;
