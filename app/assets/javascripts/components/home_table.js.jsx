var HomeTable = React.createClass({
  propTypes: {
    zipCode: React.PropTypes.string,
    town: React.PropTypes.string
  },
  render: function() {
    var rowNodes = this.props.data.map(function(data) {
      return (
        <tr key={data.id}>
          <td>{data.zipCode}</td>
          <td>{data.town}</td>
        </tr>
      );
    });
    return (
      <table className="table table-bordered home__table--margin">
        <thead>
          <tr>
            <th>Code postal</th>
            <th>Nom de la commune</th>
          </tr>
        </thead>
        <tbody>
          {rowNodes}
        </tbody>
      </table>
    );
  }
});
