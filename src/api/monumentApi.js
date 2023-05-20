//TODO: asycn await maken
const getMonumentById = (id) => {
    return {
      id: 1,
      location_id: 2,
      yearOfConstruction: 1889,
      monumentDesigner: "Gustave Eiffel",
      dimensions_id: 2,
      weight: 15,
      cost_to_construct: 18000,
      audiovisual_source_id: 2,
      location: {
        id: 2,
        latitude: 48.8584,
        longitude: 2.2945,
        street: "Champ de Mars",
        number: 5,
        city: "Paris"
      },
      dimensions : {
        height: 2,
        width: 8, 
        depth: 58
      },
      images: {
        urls: ["https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg", "https://static.dw.com/image/15861462_605.jpg"]
      },
      audiovisual_source: {
        url: "https://example.com/video.mp4",
        type: "video"
      },
      monuments_language: [
        {
          monument_id: 1,
          language: "Dutch",
          name: "Eiffeltoren",
          description: "Dit is een beschrijving",
          type: "Beelden en sculpturen",
          historical_significance: "historische waarde",
          type: [ "optie1", "optie2" ],
          accessibility: ['Accessible', 'Wheelchair accessible'],
          used_materials: ['Materiaal 1', 'Materiaal 2']
        },
        {
          monument_id: 1,
          language: "English",
          name: "Eiffel Tower",
          description: "This is a description",
          type: "Statues and sculptures",
          historical_significance: "Historical significance",
          type: [ "option1", "option2" ],
          accessibility: ['Toegankelijk', 'Rolstoeltoegankelijk'],
          used_materials: ['Material 1', 'Material 2']
        }
      ],
      source_language: [
        {
          monument_id: 1,
          language: "Dutch",
          title: "Afbeelding 1"
        },
        {
          monument_id: 1,
          language: "English",
          title: "Image 1"
        }
      ],
      images_language: [
        {
          monument_id: 1,
          language: "Dutch",
          captions: ["Afbeelding 1", "Afbeelding 2"]
        },
        {
          monument_id: 1,
          language: "English",
          captions: ["Image 1", "Image 2"]
        }
      ]
    };
  };
  
  export { getMonumentById };