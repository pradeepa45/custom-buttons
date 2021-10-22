import Button from './buttonComponents/Button';

function App() {
  return (
    <div className="maindiv">
      <p className="heading">Default button</p>
      <section>
        <Button content="Default" />
        <Button content="Default" disabled />
      </section>
      <p className="heading">Variant</p>
      <section><Button content="Default" variant="outline" />
        <Button content="Default" variant="text" />
        <Button content="Default" variant="text" disabled /></section>
      <p className="heading">Colors</p>
      <section>
        <Button content="Default" color="default" />
        <Button content="Default" color="primary" />
        <Button content="Default" color="secondary" />
        <Button content="Default" color="danger" />
      </section>
      <p className="heading">Size</p>
      <section>
        <Button content="Default" size="sm" color="primary" />
        <Button content="Default" size="md" color="primary" />
        <Button content="Default" size="lg" color="primary" />
      </section>
      <p className="heading">Icons</p>
      <section>
        <Button content="Default" color="primary" startIcon='local_grocery_store' />
        <Button content="Default" color="primary" endIcon='local_grocery_store' />
      </section>
      <p className="heading">Shadow</p>
      <section>
        <Button content="Default" color="primary" disableShadow />
      </section>
    </div >
  );
}

export default App;
