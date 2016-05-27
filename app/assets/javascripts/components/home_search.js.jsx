var HomeSearch = React.createClass({
  getInitialState: function() {
    return {search: ''};
  },
  handleSearchChange: function(e) {
    this.setState({search: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var search = this.state.search.trim();
    if (!search) {
      return;
    }
    this.props.onSearchSubmit({search: search});
    this.setState({search: ''});
  },
  render: function() {
    return (
      <form className="form-inline text-center" onSubmit={this.handleSubmit}>
        <div className="form-group" >
          <input
            type="text"
            placeholder="Your name"
            className="form-control"
            value={this.state.author}
            onChange={this.handleSearchChange}
          />
        </div>
        <input type="submit" className="btn btn-default" value="Search"/>
      </form>
    );
  }
});
