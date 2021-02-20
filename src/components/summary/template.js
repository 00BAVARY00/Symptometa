import html from '../../templates/helpers';

const conditionsHtmlMapper = (conditions) => {
  return conditions.map((condition) => `
    <div class="summary-item row">
      <div>
        ${condition.name}
        ${condition.probability >= 0.2
    ? `<i class="fa fa-eye"></i><a href data-id="${condition.id}" class="explain">explain</a>` : ''}
      </div>
      <div >
        <div class="progress">
          <div class="progress-bar bg-info" role="progressbar" 
              style="width: ${Math.floor(condition.probability * 100)}%">
            ${Math.floor(condition.probability * 100)}%
          </div>
        </div>
      </div>
      <div class="explanation col-12"></div>
    </div>          
  `);
};

const template = (context) => {
  return context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
    return html`
      <h5 class="card-title">Summary</h5>
      <div class="card-text">
        <p>Based on the interview, you could suffer from:</p>
        ${conditionsHtmlMapper(data.conditions)}
        <div class="alert alert-warning" role="alert">
          <i class="fa fa-info-circle"></i>
          Please note that the list  may not be complete and is provided for informational purposes.
        </div>
      </div>
    `;
  });
};

export default template;
