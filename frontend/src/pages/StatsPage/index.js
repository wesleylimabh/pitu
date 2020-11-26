import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { parseISO, formatRelative } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Header from '../../components/Header';
import ShortenerService from '../../services/shortenerService'
import { StatsBox, StatsBoxTitle, StatsContainer, StatsRow } from './styles'
import vars from '../../configs/vars'
class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: '',
    }
  }

  async componentDidMount() {
    const { code } = this.props.match.params;
    try {
      const service = new ShortenerService();
      this.setState({ isLoading: true })

      const shortenedURL = await service.getStats(code);

      shortenedURL.relativeDate = this._getRelativeDate(shortenedURL.updatedAt);

      this.setState({ isLoading: false, shortenedURL })
    } catch (error) {
      this.setState({ isLoading: false, errorMessage: 'Ops, a url solicitada não existe.'})
    }
  }

  _getRelativeDate(date) {
    const parsedDate = parseISO(date);
    const currentDate = new Date();

    const relativeDate = formatRelative(parsedDate, currentDate, {
      locale: ptBR,
    });
    return relativeDate;
  }

  _componentError() {
    const {errorMessage} = this.state;
    return (
      <>
      <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
      <p className="m-3">{errorMessage}</p>
      </>
    )
  }

  _componentSuccess() {
    const {code, url, hits, relativeDate } = this.state.shortenedURL;

    return (
      <>
      <p><b>{vars.HOST_APP + code}</b></p>
      <p>Redireciona para:<br/>{url}</p>
      <StatsRow>
        <StatsBox>
          <b>{hits}</b>
          <StatsBoxTitle>Visitas</StatsBoxTitle>
        </StatsBox>
        <StatsBox>
          <b>{relativeDate}</b>
          <StatsBoxTitle>Última visita</StatsBoxTitle>
        </StatsBox>
      </StatsRow>
      </>
    )
  }

  render() {
    const {errorMessage, isLoading} = this.state;
    return (
      <Container>
        <Header>Estatísticas</Header>
          <StatsContainer className="text-center">
            { isLoading ? <Spinner animation="border" /> :
                errorMessage ? this._componentError() : this._componentSuccess() }
            { !isLoading ? <a href="/" className="btn btn-primary">Encurtar nova URL</a> : ""}
          </StatsContainer>
      </Container>
    )
  }
}

export default StatsPage;