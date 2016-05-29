var HomeCount = React.createClass({
  render: function() {
    var towns_count;
    if( this.props.towns.length == 0) {
      towns_count = "Nous avons pas de résultat pour l'instant.";
    } else if(this.props.towns.length == 1) {
      towns_count = "Nous avons 1 resultat.";
    } else {
      var count = this.props.towns.length;
      towns_count = "Nous avons " + count + " resultats.";
    }
    return(
      <h2>{towns_count}</h2>
    );
  }
});
