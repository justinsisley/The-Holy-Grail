import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Header, Button, Image } from 'semantic-ui-react';
import styles from './styles';

function PricingContent() {
  return (
    <Fragment>
      <Segment className={styles.stripe} vertical>
        <Grid
          verticalAlign="middle"
          container
          stackable
        >
          <Grid.Row>
            <Grid.Column width="8">
              <Header as="h3">Drumstick capicola kielbasa.</Header>

              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut.</p>

              <Button
                size="big"
                as={Link}
                to="/signup"
                primary
                basic
              >Start a Free Trial
              </Button>
            </Grid.Column>

            <Grid.Column width="6" floated="right">
              <Image
                src="https://semantic-ui.com/examples/assets/images/wireframe/white-image.png"
                shape="rounded"
                size="large"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" floated="left">
              <Image
                src="https://semantic-ui.com/examples/assets/images/wireframe/white-image.png"
                shape="rounded"
                size="large"
              />
            </Grid.Column>

            <Grid.Column width="8">
              <Header as="h3">Tail venison jerky, landjaeger.</Header>

              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut.</p>

              <Button
                size="big"
                as={Link}
                to="/signup"
                primary
                basic
              >Start a Free Trial
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="8">
              <Header as="h3">Beef ribs picanha turducken.</Header>

              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut.</p>

              <Button
                size="big"
                as={Link}
                to="/signup"
                primary
                basic
              >Start a Free Trial
              </Button>
            </Grid.Column>

            <Grid.Column width="6" floated="right">
              <Image
                src="https://semantic-ui.com/examples/assets/images/wireframe/white-image.png"
                shape="rounded"
                size="large"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}

export default PricingContent;
