'use strict'

let fetcher = {}
fetcher.load = function(options,callback){
  let apiRoot = 'https://api.feednami.com/api/v1'
  let feedUrl = options
  if(typeof options == 'object'){
    feedUrl = options.url
  }
  let qs = 'url='+encodeURIComponent(feedUrl)
  if(options.format){
    qs += '&include_xml_document&format='+options.format
  }
  if(options.includeXml){
    qs += '&include_xml_document'
  }
  let url = apiRoot+'/feeds/load?'+qs

  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => response.json() )
    .then(responseData => {
      resolve(responseData.feed);
    })
    .catch(error => {
      reject(error);
    });
  });
}

fetcher.loadGoogleFormat = function(feedUrl,callback){
  return fetcher.load({
    url: feedUrl,
    format: 'google',
    includeXml: true
  },callback)
}

module.exports = fetcher;