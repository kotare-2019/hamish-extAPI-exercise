import request from 'superagent'

const apiBaseUrl = 'https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/2/query?where=&text=&objectIds=&time=&geometry=XMin%3A+1741915.3825000003%0D%0AYMin%3A+5416434.534%0D%0AXMax%3A+1864715.7752%0D%0AYMax%3A+5502808.1952%0D%0ASpatial+Reference%3A+2193++%282193%29+&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=json'

// https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/2
export function getRainLast6HoursLocationsAPI() {
  return request.get(apiBaseUrl)
    .then(response => {
      // console.log(response.text)
      return JSON.parse(response.text).features
    })
}