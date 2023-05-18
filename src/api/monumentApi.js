//TODO: asycn await maken
const getMonumentById = (id) => {
    return {
      id: 1,
      name: 'Eiffel Tower',
      description: 'This is a description',
      historicalSignificance: 'Historical significance',
      type: ['Type 1', 'Type 2'],
      yearOfConstruction: 1889,
      designer: 'Gustave Eiffel',
      accessibility: ['Accessible', 'Wheelchair accessible'],
      usedMaterials: ['Material 1', 'Material 2'],
      weight: 'Weight',
      costToConstruct: 'Cost to construct',
      language: 'Language',
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        street: 'Champ de Mars',
        number: '5',
        city: 'Paris',
      },
      dimensions: {
        height: 'Height',
        width: 'Width',
        depth: 'Depth',
      },
      images: [
        {
          url: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg',
          caption: 'Image 1',
        },
        {
          url: 'https://static.dw.com/image/15861462_605.jpg',
          caption: 'Image 2',
        },
      ],
      audioVisual: [
        {
          type: 'video',
          url: 'https://example.com/video.mp4',
          caption: 'Video',
        },
      ],
    };
  };
  
  export { getMonumentById };  
  