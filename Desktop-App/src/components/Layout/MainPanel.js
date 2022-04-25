import Tabs from "../Tabs/Tabs";
// import Tab from "./components/Tabs/Tab";

function MainPanel() {
  return (
    <div className="MainPanel">
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Crocodile">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}
export default MainPanel;
