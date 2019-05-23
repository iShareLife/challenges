import React, { useState, useEffect } from "react";
import { CarouselLancamentos, Implantodontia, Periodontia } from "layouts";
import { IDentClient } from "utils";


function Home(props) {
  const client = new IDentClient();
  const [lancamentos, setLancamentos] = useState({
    loading: false,
    cursos: 0,
    items: []
  });
  const [periodontia, setPeriodontia] = useState({
    loading: false,
    cursos: 0,
    items: []
  });
  const [implantodontia, setImplantodontia] = useState({
    loading: false,
    cursos: 0,
    items: []
  });

  useEffect(() => {
    fetchImplantodontia();
  }, [])

  async function fetchImplantodontia() {
    setImplantodontia({items:[],cursos: 0, loading: true});
    const videosResponse = await client.getVideosImplantodontia();
    setImplantodontia({ items: parseResponse(videosResponse.items), cursos: videosResponse.items.lenght, loading: false });
    console.log("Videos Implantodontia: ", videosResponse);
  };

  function parseResponse(item) {
    return item.map(e=>{
      return {
        imageFile: e.snippet.thumbnails.high
      }
    })
  }

  return (
    <React.Fragment>
      <CarouselLancamentos
        items={lancamentos.items}
        isLoading={lancamentos.loading}
        cursos={lancamentos.cursos}
      />
      <Implantodontia
        items={implantodontia.items}
        isLoading={implantodontia.loading}
        cursos={implantodontia.cursos}
      />
      <Periodontia
        items={periodontia.items}
        isLoading={periodontia.loading}
        cursos={periodontia.cursos}
      />
    </React.Fragment>
  );
}

export default Home;