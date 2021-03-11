import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
        <h2 class="card-title">Please check all that apply to you.</h2> </br></br>
        <div class="card-text">
          <form>
            ${riskHtmlMapper(risks, context.commonRiskFactors)}
          </form>
          
          </br> </br> </br>        
          <i class="fa fa-info-circle"></i> 
            You can read more about risk factors 
          <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#common-risk-factors">here</a>.
          
          <p class="text-muted small"></p>
            
        </div>
      `;
  });
};

export default template;
