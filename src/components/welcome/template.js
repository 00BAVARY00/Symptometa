const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      </br><h2 class="card-title" >Welcome to the Symptom Checker Demo.</h2> </br></br></br>
      <div class="card-text">
        <p>
          We created this example to help you work with our API, 
          and show you how to implement a simple symptom checker &mdash; 
          an application that mimics doctor's interview and gives you a preliminary diagnosis basing on 
          our mathematical model.
        </p> 
        <p>
          Please be honest and don't try to tell lies or wrong information about you.
        </p>
        <p>
          Click <span class="badge badge-primary">Next</span> to move to the first question.
        </p>
        <p class="text-muted small" style="position: absolute; bottom:8px; left:16px; font-size: 18px;">
          <i class="fa fa-info-circle"></i> 
          This is the welcome screen</p>
      </div>
    `);
  });
};

export default template;
