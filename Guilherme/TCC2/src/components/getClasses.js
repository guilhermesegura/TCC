import blogFetch from "../axios/config"
const getClasses = async(materia)=>{
    try {
      const response = await blogFetch.get(`/api/v1/classes?materia=${materia}`)
      const data = response.data.classes
      return data
    } catch (e) {
      console.log(e)
    }
  }

  export default getClasses
