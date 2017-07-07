import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Header, Image, Button, Container, Divider } from 'semantic-ui-react';
import { css } from 'aphrodite-jss';
import styles from './styles';

function HomeContent() {
  return (
    <div>
      <Segment className={css(styles.stripe)} vertical>
        <Grid
          verticalAlign="middle"
          container
          stackable
        >
          <Grid.Row>
            <Grid.Column width="8">
              <Header as="h3">Ditch the spreadsheets.</Header>

              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut.</p>

              <Header as="h3">Save your team, your time, and your money.</Header>

              <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean. Okra pea winter purslane coriander yarrow.</p>
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
            <Grid.Column textAlign="center">
              <Button
                size="huge"
                as={Link}
                to="/signup"
                primary
                basic
              >Start a Free Trial</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment className={css(styles.stripe, styles.quote)} vertical>
        <Grid
          celled="internally"
          columns="equal"
          stackable
        >
          <Grid.Row textAlign="center">
            <Grid.Column>
              <h3>&#34;Tracto is a game changer for our team!&#34;</h3>

              <p>
                <Image src="https://semantic-ui.com/images/avatar/large/elliot.jpg" avatar />
                &nbsp;
                <b>Carmen Cerrelli</b>, Vice President of Finance, <a href="https://www.vera.com" target="_blank" rel="noopener noreferrer">Vera Security</a>
              </p>
            </Grid.Column>

            <Grid.Column>
              <h3>&#34;We&rsquo;re used to paying so much more for this.&#34;</h3>

              <p>
                <Image src="https://semantic-ui.com/images/avatar/large/elliot.jpg" avatar />
                &nbsp;
                <b>Billy Barou</b>, Director of Sales, Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment className={css(styles.stripe)} vertical>
        <Container text>
          <Header as="h3">No more mistakes or forgotten dates</Header>

          <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout.</p>

          <Button
            size="large"
            as={Link}
            to="/features"
            primary
            basic
          >Learn More</Button>

          <Divider as="header" horizontal>
            <h4><Link to="/features">See More Features</Link></h4>
          </Divider>

          <Header as="h3">Always accurate and up-to-date</Header>

          <p>Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage.</p>

          <Button
            size="large"
            as={Link}
            to="/signup"
            primary
            basic
          >Start a Free Trial</Button>
        </Container>
      </Segment>
    </div>
  );
}

export default HomeContent;