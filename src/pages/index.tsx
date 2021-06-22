import { PieChart } from 'react-minimal-pie-chart';

function Index() {
  return (
    <>
      <h3>Produkte</h3>
      <div className="row productRow">
        <ProductListing
          setSelectedProductIdForOrdering={this.setSelectedProductIdForOrdering}
          products={this.state.products}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 style={{ marginTop: '20px' }}>Letzte Bestellungen</h3>
          <ul className="list-group">
            <LastOrders />
          </ul>
        </div>
        <div className="col-md-6">
          <h3 style={{ marginTop: '20px' }}>Beliebteste Getränke</h3>
          <div className="stats">
            <PieChart
              style={{ width: '50%', margin: '20 auto', display: 'block' }}
              data={this.state.stats}
              labelStyle={{ fontSize: '5px' }}
              labelPosition={70}
              label={({ dataEntry }) => dataEntry.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
