import { Component } from "react";

export class Article extends Component {
  render() {
    return (
      <div className="article">
        <h1>
          {this.props.emoji} {this.props.title}
          <span className="read-btn" onClick={this.props.onClick}>
            ✅
          </span>
        </h1>
        <p className="author">{this.props.author}</p>
        <div className="keywords">
          {this.props.keywords.map((keyword, index) => (
            <span key={index} className="keyword">
              #{keyword}
            </span>
          ))}
        </div>
        <p className="description">{this.props.description}</p>
        <div className="cover-container">
          <img className="cover" src={this.props.url} alt={this.props.title} />
        </div>
        <p className="content">{this.props.content}</p>
        <hr />
      </div>
    );
  }
}

export default Article;
