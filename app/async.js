exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	var p = new Promise(function(resolve, reject) {

 if(typeof value == 'string'){
 if(value) {
		resolve('success');
	}
	else {
		reject(false);
	}
 
 }
else{
	if(value) {
		resolve(true);
	}
	else {
		reject(false);
	}
	}
});
return p;
  },

  manipulateRemoteData: function(url) {
		return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
	var ppl,pplarr;
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
			ppl = JSON.parse(req.response).people;
			pplarr = [];
			for(var i in ppl){
				pplarr.push(ppl[i].name);
			}
        resolve(pplarr.sort());
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
  }
};
