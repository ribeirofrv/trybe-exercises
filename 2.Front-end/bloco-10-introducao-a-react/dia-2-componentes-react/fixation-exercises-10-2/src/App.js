import Image from './Image';

const img = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

function App() {
  return (
    <div>
      <Image source={img}
      alternativeText="Cute cat staring"/>
    </div>
  );
}

export default App;
