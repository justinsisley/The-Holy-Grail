import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Form,
  Grid,
  Input,
  Segment,
} from 'semantic-ui-react';
import cardValidator from 'card-validator';
import PriceCard from '../PriceCard';
import Conditional from '../Conditional';
import styles from './styles';

const planOptions = [
  { text: 'Startup Plan ($25/month)', value: 'startup' },
  { text: 'Small Business Plan ($50/month)', value: 'smb' },
  { text: 'Enterprise Plan ($100/month)', value: 'enterprise' },
];

class SignupForm extends React.Component {
  static propTypes = {
    location: propTypes.shape(),
  }

  static defaultProps = {
    location: {},
  }

  state = {
    selectedPlan: '',
    creditCardType: '',
    creditCardCodeName: 'CVV',
  }

  componentWillMount() {
    this.setState({
      selectedPlan: this.props.location.hash.replace('#', ''),
    });
  }

  onPlanChange = (event, data) => {
    this.setState({ selectedPlan: data.value });
  }

  onCardNumChange = (event, data) => {
    const cardType = cardValidator.number(data.value.split(' ').join(''));

    if (data.value && cardType.card) {
      this.setState({
        creditCardType: cardType.card.type,
        creditCardCodeName: cardType.card.code.name,
      });
    } else {
      this.setState({
        creditCardType: '',
        creditCardCodeName: 'CVV',
      });
    }
  }

  render() {
    let creditCardIcon;
    switch (this.state.creditCardType) {
      case 'visa': creditCardIcon = 'visa'; break;
      case 'master-card': creditCardIcon = 'mastercard'; break;
      case 'american-express': creditCardIcon = 'american express'; break;
      case 'discover': creditCardIcon = 'discover'; break;
      default: creditCardIcon = 'payment';
    }

    return (
      <Fragment>
        <Container text>
          <Grid
            className={styles.content}
            columns={16}
            centered
          >
            <Grid.Row>
              <Grid.Column width={7}>
                <Segment
                  className={styles.titles}
                  textAlign="center"
                  vertical
                >
                  <h2>Sign up</h2>
                  <h3>30-day free trial.<br />No Long Term Contracts.</h3>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Conditional
          if={!this.state.selectedPlan}
          then={(
            <Grid container stackable relaxed centered>
              <Grid.Column width={4}>
                <PriceCard
                  title="Startup"
                  price="25"
                  keyFeature="10 Contracts"
                  buttonText="Select Plan"
                  link="/signup#startup"
                />
              </Grid.Column>

              <Grid.Column width={4}>
                <PriceCard
                  title="Small Business"
                  price="50"
                  keyFeature="50 Contracts"
                  buttonText="Select Plan"
                  link="/signup#smb"
                  highlight
                />
              </Grid.Column>

              <Grid.Column width={4}>
                <PriceCard
                  title="Enterprise"
                  price="100"
                  keyFeature="Unlimited Contracts"
                  buttonText="Select Plan"
                  link="/signup#enterprise"
                />
              </Grid.Column>
            </Grid>
          )}
        />

        <Conditional
          if={this.state.selectedPlan}
          then={(
            <Container text>
              <Grid
                className={styles.content}
                columns={16}
                centered
              >
                <Grid.Row>
                  <Grid.Column width={7}>
                    <Segment
                      className={styles.form}
                      textAlign="center"
                      vertical
                    >
                      <Form>
                        <Form.Field>
                          <Dropdown
                            selection
                            labeled
                            placeholder="Choose a plan"
                            options={planOptions}
                            onChange={this.onPlanChange}
                            value={this.state.selectedPlan}
                          />
                        </Form.Field>

                        <Form.Field>
                          <Input
                            name="name"
                            placeholder="Your name"
                            icon="user outline"
                            iconPosition="left"
                          />
                        </Form.Field>

                        <Form.Field>
                          <Input
                            name="email"
                            placeholder="Your email"
                            icon="mail outline"
                            iconPosition="left"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                          />
                        </Form.Field>

                        <Form.Field>
                          <Input
                            placeholder="Card Number"
                            icon={creditCardIcon}
                            iconPosition="left"
                            onChange={this.onCardNumChange}
                          />
                        </Form.Field>

                        <Form.Group>
                          <Form.Field width="9">
                            <Input
                              placeholder="Expiration"
                              icon="calendar"
                              iconPosition="left"
                            />
                          </Form.Field>

                          <Form.Field width="7">
                            <Input
                              placeholder={this.state.creditCardCodeName}
                              icon="lock"
                              iconPosition="left"
                            />
                          </Form.Field>
                        </Form.Group>

                        <Form.Field>
                          <Checkbox
                            id="tos-checkbox"
                            label={(
                              <label htmlFor="tos-checkbox">
                                I agree to the <a href="/privacy" target="_blank">Terms and Conditions</a>
                              </label>
                            )}
                          />
                        </Form.Field>

                        <Button
                          onClick={this.handleSubmit}
                          size="big"
                          primary
                          fluid
                        >Sign Up
                        </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(SignupForm);
