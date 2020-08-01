import React from 'react';
import dadosIniciais from './data/dados_iniciais.json'
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Watson da IBM + Adobe After Effects + Wikipedia + Google Images API + Algorithmia + JavaScript + Node.js para criar 4 robôs que geram vídeos automáticos no YouTube."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />


      <Footer />
      
    </div>
  );
}

export default App;
