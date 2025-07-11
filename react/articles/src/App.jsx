import React from "react";
import data from "./data.js";
import Article from "./components/Article.jsx";
import Swal from "sweetalert2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readArticles: [],
    };
  }

  componentDidMount() {
    Swal.fire({
      title: "Welcome to the Article App!",
      text: "Explore various articles and learn something new today!",
      icon: "info",
      confirmButtonText: "Let's Go!",
    });
  }

  render() {
    return (
      <>
        <div>
          {data.map((art, index) => (
            <Article
              onClick={() => {
                this.setState((prevState) => ({
                  readArticles: [
                    ...prevState.readArticles,
                    `${art.emoji} ${art.title} by ${art.author}`,
                  ],
                }));
                Swal.fire({
                  title: `You read: ${art.title}`,
                  text: "Keep exploring more articles!",
                  icon: "success",
                  confirmButtonText: "Awesome!",
                });
              }}
              key={index}
              title={art.title}
              emoji={art.emoji}
              author={art.author}
              description={art.description}
              keywords={art.keywords}
              content={art.content}
              url={art.image_url}
            />
          ))}
        </div>
        <div className="read-articles">
          <h2>Read Articles</h2>
          <ul>
            {this.state.readArticles.map((article, index) => (
              <li key={index}>{article}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
