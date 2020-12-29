import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    resolve(html`
      <h3 class="card-title">Tell us how you feel.</h3> </br></br>
      <div class="card-text">
        <form>
          <div class="form-group">
            <label for="input-feel">
              Feel free to desribe your symptoms and we will try to recognize it using Natural Language 
              Processing algorithms. </br>
              Please write "SYMPTOMS" not diseases.
            </label>
            <textarea placeholder="e.g. I got headache, pain in my stomach " class="form-control" 
            id="input-feel" rows="4"></textarea>
          </div>
        </form>
        <p>Identified observations:</p>
        <ul class="list-unstyled" id="observations">
        </ul>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i> This screen uses our NLP engine algorithm to extract symptoms 
          from a written text.
          
        </p>
      </div>
    `);
  });
};

export default template;
