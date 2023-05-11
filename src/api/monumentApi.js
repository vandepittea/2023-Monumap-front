//TODO: asycn await maken
const getMonumentById = (id) => {
    // const response = await fetch(`/api/monuments/${id}`)
    // const data = await response.json()
    // return data

    return  {
        id: 1,
        name: 'Eiffel Tower',
        description: 'This is a description',
        images: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg'
      }
  }
  
export  {
    getMonumentById,
}
  