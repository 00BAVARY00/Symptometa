import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
      <h5 class="card-title">Please select where you <strong>live</strong> or have recently
      <strong>traveled</strong> to.</h5>
      <div class="card-text">
        <form>
          ${riskHtmlMapper(risks, context.locationRiskFactors)}
        </form>
        <p class="text-muted small">
          
        </p>
      </div>
    `;
  });
};

export default template;
