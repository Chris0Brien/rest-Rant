const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, Sorry, we can't find this page!</p>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.CN5r0oeY-4WCFx21IadrjgAAAA?pid=ImgDet&rs=1"
            alt="Buttstallion"
          />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
