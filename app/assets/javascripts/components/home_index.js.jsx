var HomeIndex = React.createClass({
  getInitialState: function () {
    return { towns: [] };
  },
  handleSearchSubmit: function(search) {
    console.log(search);
    $.ajax({
     url: '/',
     dataType: 'json',
     data: search,
     type: 'POST',
     success: function(towns) {
       console.log(towns);
       this.setState({ towns: towns });
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
  },
  render: function() {
    return (
      <div className="container application--margin">
      <h1>Search Towns</h1>
        <HomeSearch onSearchSubmit={this.handleSearchSubmit} />
        <HomeCount towns={this.state.towns} />
        <HomeTable towns={this.state.towns} />
      </div>
    );
  }
});
