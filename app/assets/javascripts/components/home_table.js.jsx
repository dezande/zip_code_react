var HomeTable = React.createClass({
  render: function() {
    var rowNodes = this.props.towns.map(function(town) {
      return (
        <tr key={town.id}>
          <td>{town.code_postal}</td>
          <td>{town.nom_commune}</td>
        </tr>
      );
    });
  
    return (
      <div className="home__table">
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
      </div>
    );
  }
});
