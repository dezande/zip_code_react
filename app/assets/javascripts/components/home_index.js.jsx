var HomeIndex = React.createClass({
  handleSearchSubmit: function(search) {
    console.log(search);
  },
  render: function() {
    return (
      <div className="container application--margin">
        <HomeSearch onSearchSubmit={this.handleSearchSubmit} />
        <HomeTable data={this.props.data} />
      </div>
    );
  }
});
