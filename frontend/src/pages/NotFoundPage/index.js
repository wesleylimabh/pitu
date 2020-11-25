import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../../components/Header'
import { PageNotFoundContainer } from './styles'


class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);

    this.errorMessage = 'Página não encontrada'
  }

  render() {
    return (
      <>
        <Header>Seu novo encurtador de URL</Header>
  
        <PageNotFoundContainer className="text-center">
          <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
          <p className="m-3"><b>{this.errorMessage} <br/> :(</b></p>
          <a href="/" className="btn btn-primary">Encurtar nova URL</a>
        </PageNotFoundContainer>
      </>
      )
  }
}

export default NotFoundPage;