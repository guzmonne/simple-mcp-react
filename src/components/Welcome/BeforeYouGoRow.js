import React, {PropTypes as T} from 'react'

class BeforeYouGoRow extends React.Component {
  static propTypes = {
    onChange: T.func.isRequired,
    company: T.string.isRequired,
    companyEmail: T.string.isRequired,
    portal: T.string,
  }
  
  render() {
    const {company, companyEmail, onChange, portal} = this.props
    return (
      <div className="row Welcome__BeforeYouGo">
        <div className="col-xs-12">
          <p>Antes de {portal === 'conatel' ? 'irte' : 'continuar'}, comparte esta información con nosotros:</p>
          <div className="control-group">
            <input type="text"
              value={company}
              placeholder="Empresa que trabajas"
              className="form-control"
              onChange={onChange('company')}
            />
          </div>
          <div className="control-group">
            <input type="text"
              value={companyEmail}
              placeholder="Tu email corporativo"
              className="form-control"
              onChange={onChange('companyEmail')}
            />
          </div>
        </div>
        <div className="col-xs-12" style={{marginTop: '10px'}}>
          <strong>Muchas gracias.</strong>
        </div>
      </div>
    )
  }
}

export default BeforeYouGoRow
