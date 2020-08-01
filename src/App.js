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
        videoDescription={"Essa é uma receita para quem nunca fez pão ou já tentou fazer e não deu certo. Vamos usar somente 4 ingredientes básicos e nenhum utensílio especial para conseguir um delicioso pão com casca crocante e um miolo bem macio."}
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



      <Footer />
      
    </div>
  );
}

export default App;
