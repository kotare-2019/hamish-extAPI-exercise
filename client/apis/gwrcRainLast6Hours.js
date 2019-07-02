import request from 'superagent'
import proj4 from 'proj4'

const apiBaseUrl = 'https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/1/query?where=&text=&objectIds=&time=&geometry=XMin%3A+1741915.3825000003%0D%0AYMin%3A+5416434.534%0D%0AXMax%3A+1864715.7752%0D%0AYMax%3A+5502808.1952%0D%0ASpatial+Reference%3A+2193++%282193%29&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=Name%2C+LatestRainfall%2C+RainTot6Hrs%2C+LatestTime&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson'
// Old query
// https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/2/query?where=&text=&objectIds=&time=&geometry=XMin%3A+1741915.3825000003%0D%0AYMin%3A+5416434.534%0D%0AXMax%3A+1864715.7752%0D%0AYMax%3A+5502808.1952%0D%0ASpatial+Reference%3A+2193++%282193%29+&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=json

// New query that includes rainfall
// https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/1/query?where=&text=&objectIds=&time=&geometry=XMin%3A+1741915.3825000003%0D%0AYMin%3A+5416434.534%0D%0AXMax%3A+1864715.7752%0D%0AYMax%3A+5502808.1952%0D%0ASpatial+Reference%3A+2193++%282193%29&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=Name%2C+LatestRainfall%2C+RainTot6Hrs%2C+LatestTime&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson

// https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/2
export function getRainLast6HoursLocationsAPI() {
  return request.get(apiBaseUrl)
    .then(response => {
      //perform coordinate transformation from NZTM WGS (2193) to WGS (EPSG 3857) 
      const rainLast6HoursLocations = JSON.parse(response.text).features
        .map(e => {
          const coords = { x: e.geometry.x, y: e.geometry.y }
          const convertedCoords = convertCoordsFromNZTMto3857(coords)
          return {
            name: e.attributes.Name,
            latestRainfall: e.attributes.LatestRainfall,
            rainLast6Hours: e.attributes.RainTot6Hrs,
            lastRecording: e.attributes.LatestTime,
            lat: convertedCoords.y,
            long: convertedCoords.x
          }
        })
      return rainLast6HoursLocations
    })
}

const NZTM = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs '
const googleMapsSystem = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'

function convertCoordsFromNZTMto3857(coordinates) {
  // Coordinates may an object of the form {x:x,y:y} or an array of the form [x,y]
  const convertedCoords = proj4(NZTM, googleMapsSystem, coordinates)
  //const convertedCoords = proj4(NZTM, 'GOOGLE', coordinates)

  return convertedCoords
}