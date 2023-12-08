import React, { Component } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      repositories: [],
      username: this.props.username || "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.setState({ username: this.props.username }, this.fetchData);
    }
  }

  fetchData = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${this.state.username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${this.state.username}/repos`
      );
      const repositories = await reposResponse.json();

      this.setState({ userData, repositories });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handleReset = () => {
    this.setState({
      userData: null,
      repositories: [],
      username: "",
    });
  };

  render() {
    const { userData, repositories } = this.state;

    return (
      <Container style={{ textAlign: "center" }} className="mt-5">
        <Row className="justify-content-center ">
          <Col md={6}>
            {userData ? (
              <div>
                <h2>{userData.name}</h2>
                <p>Username: {userData.login}</p>
                <p>Bio: {userData.bio}</p>
                <p>Location: {userData.location}</p>

                <Image
                  src={userData.avatar_url}
                  alt="Avatar"
                  width={"50%"}
                  height={"50%"}
                />

                <h3>Repositories:</h3>
                {Array.isArray(repositories) && repositories.length > 0 ? (
                  <ul style={{ listStyleType: "none" }}>
                    {repositories.map((repo) => (
                      <li key={repo.id}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No repositories found</p>
                )}
              </div>
            ) : (
              <p>No user found</p>
            )}
          </Col>
        </Row>
        <Button
          variant="primary"
          type="button"
          onClick={this.handleReset}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "2px auto",
            width: "30vw",
          }}
        >
          Reset
        </Button>
      </Container>
    );
  }
}

export default UserProfile;
