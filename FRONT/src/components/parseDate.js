const parseDate = (date) => {
    let dia = new Date (date)
    var options = {year: 'numeric', month: 'long', day: 'numeric' }
    return dia.toLocaleDateString("pt-BR", options)
  }

  export default parseDate