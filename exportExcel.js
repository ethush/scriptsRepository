  //Requires use of jQuery library, you can modify to pure Javascript instead
  
  // Create a Blob of the content of $element (table, div) and passes
  // into a virtual file to make direct download
  // Creates an 'a' elements and fire the download with parameters of URL
  // that contains Blob file and fires fclick event
  
  function exportExcel(element) {
    let file = new Blob([$(element).html()],{type:'application/vnd.ms-excel'})
    let url = URL.createObjectURL(file)
    let a = $('<a />', {
        href: url,
        download: 'file.xls'
    }).appendTo('body').get(0).click()
  }
