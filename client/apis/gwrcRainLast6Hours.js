import request from 'superagent'

const apiBaseUrl = 'https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/2'

// https://mapping.gw.govt.nz/arcgis/rest/services/Rainfall/MapServer/2
export function getRainLast6Hours() {
  return request.get(apiBaseUrl)
    .then(response => response.body)
}